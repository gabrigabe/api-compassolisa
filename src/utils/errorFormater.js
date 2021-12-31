class ErrorFormater {
  async format(error) {
    const formatError = error.details.map((details) => ({
      description: details.context.label,
      name: details.message,

    }));

    return formatError;
  }
}

module.exports = new ErrorFormater();
