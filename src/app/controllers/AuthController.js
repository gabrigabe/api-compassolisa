const AuthService = require('../services/AuthService');

class AuthController {
  async auth(req, res, next) {
    try {
      const jwt = await AuthService.login(req);

      return res.header('token', jwt).status(200).end();
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new AuthController();
