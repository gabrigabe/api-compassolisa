const Joi = require('joi');
const errorFormater = require('../utils/errorFormater');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),

    });

    const { error } = await schema.validate(req.params, { abortEarly: false });
    if (error) {
      throw error;
    }
    return next();
  } catch (error) {
    const errorFormated = await errorFormater.format(error);
    return res.status(400).json(errorFormated);
  }
};
