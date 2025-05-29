const { privateKey, refreshTokenKey } = require("../utils/const");
const jwt = require("jsonwebtoken");

const authMiddleWare = async (req, res, next) => {
  const token = req.headers.authorization;
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

const refreshTokenMiddleWare = async (req, res, next) => {
  const refreshToken = req.headers.authorization;
  if (!refreshToken) res.status(401).send();
  try {
    const formattedToken = refreshToken.replace("Bearer ", "");
    const verifiedResult = await jwt.verify(formattedToken, refreshTokenKey);
    delete verifiedResult.iat;
    delete verifiedResult.exp;
    console.log("verifiedResult", verifiedResult);
    const accessToken = await jwt.sign(verifiedResult, privateKey, {
      expiresIn: "3h",
    });
    res.send({ accessToken });
  } catch (e) {
    console.log(e);
    res.status(401).send();
  }
};

module.exports = {
  authMiddleWare,
  refreshTokenMiddleWare,
};
