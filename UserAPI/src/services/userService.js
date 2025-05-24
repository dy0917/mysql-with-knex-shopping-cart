const axios = require("axios");

const findUserByEmail = async (email) => {
  const user = await axios.get(
    `http://localhost:3000/api/users?emailId=${email}`
  );
  return user.data;
};

const createUser = async (userBody) => {
  const user = await axios.post(`http://localhost:3000/api/users`, userBody);
  return user.data;
};

const checkPassword = async (userBody) => {
  const user = await axios.post(
    `http://localhost:3000/api/users/checkPassword`,
    userBody
  );
  return user.data;
};

module.exports = {
  findUserByEmail,
  createUser,
  checkPassword,
};
