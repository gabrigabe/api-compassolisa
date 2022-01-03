/* eslint-disable no-unused-vars */
const NotFound = require('../errors/NotFound');

const errorHandler = async (error, req, res, next) => {
  let status = 500;
  if (error instanceof NotFound) {
    status = 404;
  }
  return res.status(status).json(error);
};

module.exports = errorHandler;
