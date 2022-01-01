/* eslint-disable no-unused-vars */
const NotFound = require('../app/errors/NotFound');

const errorHandler = async (error, req, res, next) => {
  if (error instanceof NotFound) {
    return res.status(404).json(error);
  }
  return res.status(500).json({ description: 'Internal Server Error', name: 'Something went wrong' });
};

module.exports = errorHandler;
