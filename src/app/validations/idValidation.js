const Joi = require('joi');

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
    return next(error);
  }
};
