/* eslint-disable prefer-const */

class Repository {
  constructor(schema) {
    this.schema = schema;
  }

  async create(data) {
    const create = await this.schema.create(data);
    return create;
  }

  async findAll(query) {
    const { page = 1, limit = 100 } = query;
    const getAll = await this.schema.paginate(query, { page, limit });
    return getAll;
  }

  async findById(id) {
    const getId = await this.schema.findById(id);
    return getId;
  }

  async update(data, id) {
    const getId = await this.schema.findByIdAndUpdate(id, data);
    return getId;
  }

  async remove(id) {
    const removeId = await this.schema.findByIdAndRemove(id);
    return removeId;
  }
}

module.exports = Repository;
