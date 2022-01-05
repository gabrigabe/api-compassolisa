const errorHandler = require('../app/middlewares/errorMidleware');
const authController = require('../app/controllers/AuthController');

module.exports = (server, routes, prefix = '/api/v1') => {
  routes.post('/auth/login', authController.auth);
  server.use(prefix, routes, errorHandler);
};
