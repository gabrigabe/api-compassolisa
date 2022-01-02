const Repository = require('./Repository');

class PeopleRespository extends Repository {
  constructor() {
    super('PeopleSchema');
  }
}

module.exports = new PeopleRespository();
