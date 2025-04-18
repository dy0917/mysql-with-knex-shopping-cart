let Models = require("../models"); //matches index.js

const getAllUsers = async () => {
  const users = await Models.User.scope('withoutPassword').findAll({});
  return users;
};

const addUserToDB = async (data) => {
  const user = await new Models.User(data).save();
  
  return user;
};

module.exports = {
  getAllUsers,
  addUserToDB,
};
