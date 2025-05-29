const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");
const {
  authMiddleWare,
  refreshTokenMiddleWare,
} = require("../middlware/authMiddleware");

router.get("/me", authMiddleWare, async (req, res) => {
  console.log("req.loginUser", req.loginUser);
  res.send(req.loginUser);
});

router.get("/accessToken", refreshTokenMiddleWare);

router.post("/create", async (req, res) => {
  const user = await register(req.body);
  if (!user) {
    res.status(404).send("User existed");
  }
  res.status(200).send(user);
});

router.post("/login", async (req, res) => {
  try {
    const result = await login(req.body);
    if (!result) {
      res.status(401).send();
    }
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    res.status(401).send();
  }
});

module.exports = router;
