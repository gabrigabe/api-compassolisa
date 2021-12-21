const { Router } = require('express');

const cars = require('./cars.routes');

module.exports = (server) => {
  server.use((req, res, next) => {
    cars(server, new Router());
    next();
  });
};
