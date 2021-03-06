const PeopleService = require('../services/PeopleService');
const peopleSerializer = require('../utils/serializer/peopleSerializer');

class PeopleController {
  async create(req, res, next) {
    try {
      const result = await PeopleService.create(req.body);
      return res.status(201).json(peopleSerializer.serializeAPeople(result));
    } catch (error) {
      return next(error);
    }
  }

  async get(req, res) {
    const get = await PeopleService.findAll(req.query);
    return res.status(200).json(peopleSerializer.serializeAllPeople(get));
  }

  async getById(req, res, next) {
    try {
      const getId = await PeopleService.findById(req.params.id);
      return res.status(200).json(peopleSerializer.serializeAPeople(getId));
    } catch (error) {
      return next(error);
    }
  }

  async update(req, res, next) {
    try {
      await PeopleService.update(req.params.id, req.body);
      return res.status(204).end();
    } catch (error) {
      return next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await PeopleService.remove(req.params.id);
      return res.status(204).end();
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new PeopleController();
