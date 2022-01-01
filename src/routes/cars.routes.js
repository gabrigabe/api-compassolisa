const carsController = require('../app/controllers/CarsController');
const errorHandler = require('../middlewares/errorMidleware');
const { carValidations, idValidation } = require('../app/validations');

module.exports = (server, routes, prefix = '/api/v1') => {
  routes.post('/cars', carValidations, carsController.create);
  routes.get('/cars', carsController.get);
  routes.get('/cars/:id', idValidation, carsController.getById);
  routes.put('/cars/:id', idValidation, carValidations, carsController.update);
  routes.delete('/cars/:id', idValidation, carsController.delete);
  server.use(prefix, routes, errorHandler);
};
