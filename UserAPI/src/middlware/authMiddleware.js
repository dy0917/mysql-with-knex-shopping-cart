const privateKey = "superSecret";
const jwt = require("jsonwebtoken");

const authMiddleWare = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) res.status(401).send();
  try {
    const formattedToken = token.replace("Bearer ", "");
    const verifiedResult = await jwt.verify(formattedToken, privateKey);
    req.loginUser = verifiedResult;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).send();
  }
};

module.exports = {
  authMiddleWare,
};
