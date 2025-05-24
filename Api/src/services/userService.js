let Models = require("../models"); //matches index.js

const getAllUsers = async (filter = {}) => {
  const users = await Models.User.scope("withoutPassword").findAll({
    where: filter,
  });
  return users;
};

const getUserByEmail = async (emailId) => {
  const users = await Models.User.findOne({
    where: { emailId },
  });
  return users;
};

const addUserToDB = async (data) => {
  const user = await new Models.User(data).save();
  return user;
};

module.exports = {
  getAllUsers,
  addUserToDB,
  getUserByEmail,
};
