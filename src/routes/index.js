const { Router } = require('express');

const cars = require('./cars.routes');
const peoples = require('./people.routes');

module.exports = (server) => {
  server.use((req, res, next) => {
    cars(server, new Router());
    peoples(server, new Router());
    next();
  });
};
