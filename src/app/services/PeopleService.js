const NotFound = require('../errors/NotFound');
const PeopleRepository = require('../repositories/PeopleRespository');

class PeopleService {
  async create(data) {
    const car = await PeopleRepository.create(data);
    return car;
  }

  async findAll(query) {
    const getAll = await PeopleRepository.findAll(query);
    return getAll;
  }

  async findById(id) {
    const getById = await PeopleRepository.findById(id);
    if (!getById) {
      throw new NotFound('id');
    }
    return getById;
  }

  async update(data, id) {
    const update = await PeopleRepository.update(id, data);
    if (!update) {
      throw new NotFound('id');
    }
    return update;
  }

  async remove(id) {
    const removeId = await PeopleRepository.remove(id);
    if (!removeId) {
      throw new NotFound('id');
    }
    return removeId;
  }
}

module.exports = new PeopleService();
