const Repository = require('../repositories/Repository');

class CarsService {
  async create(data) {
    try {
      const car = await Repository.create(data);
      return car;
    } catch (e) {
      return e;
    }
  }
}

module.exports = new CarsService();
