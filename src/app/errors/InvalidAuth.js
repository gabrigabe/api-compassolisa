class NotFound extends Error {
  constructor() {
    super();
    this.description = 'Unauthorized';
    this.name = 'email or password invalid';
  }
}

module.exports = NotFound;
