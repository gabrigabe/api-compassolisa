const { PeopleSchema } = require('../schemas');
const Repository = require('./Repository');

class PeopleRespository extends Repository {
  constructor() {
    super(PeopleSchema);
  }

  async findbyEmail(email) {
    const result = await PeopleSchema.findOne({ email });
    return result;
  }
}

module.exports = new PeopleRespository();
