const mongoose = require('mongoose');
require('dotenv').config();

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(process.env.CONNECTSTRING);
  }
}

module.exports = new Database().connect();
