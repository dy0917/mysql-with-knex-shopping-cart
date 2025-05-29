const {
  findUserByEmail,
  createUser,
  checkPassword,
} = require("../services/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { privateKey, refreshTokenKey } = require("../utils/const");
const register = async (userBody) => {
  const { firstName, lastName, emailId, password } = userBody;

  const exsitedUsers = await findUserByEmail(emailId);
  if (exsitedUsers.length > 0) {
    return undefined;
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const user = await createUser({
    firstName,
    lastName,
    emailId,
    password: hashPassword,
  });

  return user;
};

const getAccessToken = async ({ refreshToken }) => {};

const login = async ({ emailId, password }) => {
  const user = await checkPassword({ emailId, password });
  const accessToken = await jwt.sign(user, privateKey, { expiresIn: "3h" });
  const refreshToken = await jwt.sign(user, refreshTokenKey, {
    expiresIn: "1d",
  });
  return { user, accessToken, refreshToken };
};

module.exports = {
  register,
  login,
};
