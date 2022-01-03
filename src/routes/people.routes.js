const PeopleController = require('../app/controllers/PeopleController');
const errorHandler = require('../app/middlewares/errorMidleware');
const { idValidation } = require('../app/validations');

module.exports = (server, routes, prefix = '/api/v1') => {
  routes.post('/peoples', PeopleController.create);
  routes.get('/peoples', PeopleController.get);
  routes.get('/peoples/:id', idValidation, PeopleController.getById);
  routes.put('/peoples/:id', idValidation, PeopleController.update);
  routes.delete('/peoples/:id', idValidation, PeopleController.delete);
  server.use(prefix, routes, errorHandler);
};
