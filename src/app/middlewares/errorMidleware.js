/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const { ValidationError } = require('joi');
const { NotFound, InvalidAuth } = require('../errors');
const formater = require('../utils/errorFormater');

const errorHandler = async (error, req, res, next) => {
  let status = 500;
  if (error instanceof NotFound) {
    status = 404;
  }
  if (error instanceof ValidationError) {
    error = await formater(error);
    status = 400;
  }
  if (error instanceof InvalidAuth) {
    status = 401;
  }
  return res.status(status).json(error);
};

module.exports = errorHandler;
