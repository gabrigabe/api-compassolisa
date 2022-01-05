const { CarSchema } = require('../schemas');
const Repository = require('./Repository');

class CarsRepository extends Repository {
  constructor() {
    super(CarSchema);
  }
}

module.exports = new CarsRepository();
