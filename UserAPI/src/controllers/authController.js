const {
  findUserByEmail,
  createUser,
  checkPassword,
} = require("../services/userService");
const bcrypt = require("bcrypt");
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

const login = async ({ emailId, password }) => {
  const user = await checkPassword({ emailId, password });
  return user;
};

module.exports = {
  register,
  login,
};
