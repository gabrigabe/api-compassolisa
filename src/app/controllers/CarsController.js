const CarsService = require('../services/CarsService');
const CarSerializer = require('../serializer/carSerializer');

class CarsController {
  async create(req, res) {
    const result = await CarsService.create(req.body);
    return res.status(201).json(result);
  }

  async get(req, res) {
    const get = await CarsService.findAll(req.query);
    return res.status(200).json(await CarSerializer.serializeCar(get));
  }

  async getById(req, res) {
    const getId = await CarsService.findById(req.params.id);
    return res.status(200).json(getId);
  }

  async update(req, res) {
    await CarsService.update(req.params.id, req.body);
    return res.status(200).end();
  }

  async delete(req, res) {
    await CarsService.remove(req.params.id);
    return res.status(200).end();
  }
}

module.exports = new CarsController();
