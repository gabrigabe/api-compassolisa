const getAge = (date) => {
  const today = new Date();
  const userBirth = new Date(date);
  let userAge = today.getFullYear() - userBirth.getFullYear();
  const userMonth = today.getMonth - userBirth.getMonth();

  if (userMonth < 0 || today.getDate() < userBirth.getDate()) {
    userAge -= 1;
  }

  return userAge;
};

module.exports = getAge;
