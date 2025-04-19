const express = require("express");
const router = express.Router();
const { getUsers, createUser } = require("../controllers/userController");

router.get("/users", async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
});

router.post("/users", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.send({ data: user });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
});

module.exports = router;
