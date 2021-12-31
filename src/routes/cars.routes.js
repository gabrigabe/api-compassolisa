const carsController = require('../app/controllers/CarsController');

module.exports = (server, routes, prefix = '/cars') => {
  routes.post('/', carsController.create);
  routes.get('/', carsController.get);
  routes.get('/:id', carsController.getById);
  routes.put('/:id', carsController.update);
  routes.delete('/:id', carsController.delete);
  server.use(prefix, routes);
};
