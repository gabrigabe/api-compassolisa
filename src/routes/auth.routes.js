const errorHandler = require('../app/middlewares/errorMidleware');
const authController = require('../app/controllers/AuthController');
const { authValidation } = require('../app/validations');

module.exports = (server, routes, prefix = '/api/v1') => {
  routes.post('/auth/login', authValidation, authController.auth);
  server.use(prefix, routes, errorHandler);
};
