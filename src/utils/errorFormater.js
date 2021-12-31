class ErrorFormater {
  async format(error) {
    try {
      const formatError = error.details.map((details) => ({
        description: details.context.label,
        name: details.message,

      }));

      return formatError;
    } catch (err) {
      return { Error: 'Server Error' };
    }
  }
}

module.exports = new ErrorFormater();
