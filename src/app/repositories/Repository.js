const schemas = require('../schemas');

class Repository {
  async create(data) {
    const create = await schemas.CarSchema.create(data);
    return create;
  }
}

module.exports = new Repository();
