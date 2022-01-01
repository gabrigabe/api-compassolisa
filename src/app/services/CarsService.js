const NotFound = require('../errors/NotFound');
const CarsRepository = require('../repositories/CarsRepository');

class CarsService {
  async create(data) {
    const car = await CarsRepository.create(data);
    return car;
  }

  async findAll(query) {
    const getAll = await CarsRepository.findAll(query);
    return getAll;
  }

  async findById(id) {
    const getById = await CarsRepository.findById(id);
    if (!getById) {
      throw new NotFound('id');
    }
    return getById;
  }

  async update(data, id) {
    const update = await CarsRepository.update(id, data);
    if (!update) {
      throw new NotFound('id');
    }
    return update;
  }

  async remove(id) {
    const removeId = await CarsRepository.remove(id);
    if (!removeId) {
      throw new NotFound('id');
    }
    return removeId;
  }
}

module.exports = new CarsService();
