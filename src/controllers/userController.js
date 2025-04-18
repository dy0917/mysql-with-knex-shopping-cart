"use strict";
const { getAllUsers, addUserToDB } = require("../services/userService");
const getUsers = async () => {
  //finds all users
  const users = await getAllUsers();
  return users;
};

const createUser = async (userId) => {
  //creates a new user using JSON data POSTed in request body
  const user = await addUserToDB(userId);
  return user;
};
module.exports = {
  getUsers,
  createUser,
};
