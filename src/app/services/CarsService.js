const CarsRepository = require('../repositories/CarsRepository');

class CarsService {
  async create(data) {
    try {
      const car = await CarsRepository.create(data);
      return car;
    } catch (e) {
      return e;
    }
  }

  async findAll(query) {
    const getAll = await CarsRepository.findAll(query);
    return getAll;
  }

  async findById(id) {
    const getById = await CarsRepository.findById(id);
    return getById;
  }

  async update(data, id) {
    const update = await CarsRepository.update(id, data);
    return update;
  }

  async remove(id) {
    const removeId = await CarsRepository.remove(id);
    return removeId;
  }
}

module.exports = new CarsService();
