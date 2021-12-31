const schemas = require('../schemas');

class Repository {
  constructor(schema) {
    this.schema = schema;
  }

  async create(data) {
    const create = await schemas[this.schema].create(data);
    return create;
  }

  async findAll() {
    const getAll = await schemas[this.schema].find();
    return getAll;
  }

  async findById(id) {
    const getId = await schemas[this.schema].findById(id);
    return getId;
  }

  async update(data, id) {
    const getId = await schemas[this.schema].findByIdAndUpdate(id, data);
    return getId;
  }

  async remove(id) {
    const removeId = await schemas[this.schema].findByIdAndRemove(id);
    return removeId;
  }
}

module.exports = Repository;
