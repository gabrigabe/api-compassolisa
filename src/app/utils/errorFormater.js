const formater = async (error) => {
  const formatError = error.details.map((details) => ({
    description: details.context.label,
    name: details.message,

  }));

  return formatError;
};

module.exports = formater;
