const CarsService = require('../services/CarsService');

class CarsController {
  async get(req, res) {
    return res.status(200).json({ message: 'Hello World' });
  }

  async create(req, res) {
    const result = await CarsService.create(req.body);
    console.log(result);
    return res.status(201).json(result);
  }
}

module.exports = new CarsController();
