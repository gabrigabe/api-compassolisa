const express = require('express');
const router = require('./routes');
const error = require('./middlewares/errorMidleware');
require('./infra/db/mongo');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(error);
  }

  routes() {
    router(this.server);
  }
}

module.exports = new App().server;
