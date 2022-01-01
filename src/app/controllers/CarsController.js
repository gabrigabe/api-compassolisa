const CarsService = require('../services/CarsService');
const carSerializer = require('../utils/serializer/carSerializer');

class CarsController {
  async create(req, res, next) {
    try {
      const result = await CarsService.create(req.body);
      return res.status(201).json(carSerializer.serializeACar(result));
    } catch (error) {
      return next(error);
    }
  }

  async get(req, res) {
    const get = await CarsService.findAll(req.query);
    return res.status(200).json(carSerializer.serializeAllCars(get));
  }

  async getById(req, res, next) {
    try {
      const getId = await CarsService.findById(req.params.id);
      return res.status(200).json(carSerializer.serializeACar(getId));
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      await CarsService.update(req.params.id, req.body);
      return res.status(200).end();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await CarsService.remove(req.params.id);
      return res.status(200).end();
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new CarsController();
