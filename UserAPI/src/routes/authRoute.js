const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.get("/:id", (req, res) => {
  res.send("user route");
});

router.post("/create", async (req, res) => {
  const user = await register(req.body);
  if (!user) {
    res.status(404).send("User existed");
  }
  res.status(200).send(user);
});

router.post("/login", async (req, res) => {
  try {
    const user = await login(req.body);
    if (!user) {
      res.status(401).send();
    }
    res.status(200).send(user);
  } catch (e) {
    res.status(401).send();
  }
});

module.exports = router;
