const carsController = require('../app/controllers/CarsController');

module.exports = (server, routes, prefix = '/cars') => {
  routes.get('/', carsController.get);
  routes.post('/', carsController.create);
  server.use(prefix, routes);
};
