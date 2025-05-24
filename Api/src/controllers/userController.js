"use strict";
const {
  getAllUsers,
  addUserToDB,
  getUserByEmail,
} = require("../services/userService");
const bcrypt = require("bcrypt");
const getUsers = async (query) => {
  //finds all users
  const users = await getAllUsers(query);
  return users;
};

const createUser = async (userId) => {
  //creates a new user using JSON data POSTed in request body
  const user = await addUserToDB(userId);
  return user;
};

const checkPassword = async ({ emailId, password }) => {
  //creates a new user using JSON data POSTed in request body

  const targetUser = await getUserByEmail(emailId);
  if (!targetUser) return undefined;
  const result = await bcrypt.compare(password, targetUser.password);
  console.log("result", result);
  if (result) {
    const users = await getAllUsers({ emailId });
    return users[0];
  }
  return undefined;
};

module.exports = {
  getUsers,
  createUser,
  checkPassword,
};
