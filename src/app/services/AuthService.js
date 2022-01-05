const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const PeopleRepository = require('../repositories/PeopleRespository');
const { InvalidAuth } = require('../errors');
require('dotenv').config();

class AuthService {
  async login(req) {
    const user = await PeopleRepository.findbyEmail(req.body.email);
    if (!user) {
      throw new InvalidAuth();
    }
    const comparePassword = await compare(req.body.senha, user.senha);
    if (!comparePassword) {
      throw new InvalidAuth();
    }

    const loginToken = await sign({
      user: user.email,
      habilitado: user.habilitado,
    }, process.env.SECRET, {
      expiresIn: '1d',
    });

    return loginToken;
  }
}

module.exports = new AuthService();
