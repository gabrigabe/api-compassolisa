const { validator } = require('cpf-cnpj-validator');
const Joi = require('joi').extend(validator);
const userAge = require('../utils/ageChecker');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().trim().required(),
      cpf: Joi.document().cpf().regex(/[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/).required(),
      data_nascimento: Joi.date().required().custom((value, helper) => {
        const getAge = userAge(value);
        if (getAge >= 18) {
          return true;
        }
        return helper.message('Needs to be 18 years or older');
      }),
      email: Joi.string().email().required(),
      senha: Joi.string().trim().min(6).required(),
      habilitado: Joi.string().valid('sim', 'nao').required(),

    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) {
      throw error;
    }
    return next();
  } catch (error) {
    return next(error);
  }
};
