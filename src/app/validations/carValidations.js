const Joi = require('joi');
const errorFormater = require('../utils/errorFormater');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi.string().trim().required(),
      cor: Joi.string().trim().required(),
      ano: Joi.number().min(1950).max(2022).required(),
      acessorios: Joi.array().unique().min(1).required(),
      quantidadePassageiros: Joi.number().required(),
    });

    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) {
      throw error;
    }
    return next();
  } catch (error) {
    const errorFormated = await errorFormater.format(error);
    return res.status(400).json(errorFormated);
  }
};
