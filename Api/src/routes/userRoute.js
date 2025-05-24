const express = require("express");
const router = express.Router();
const {
  getUsers,
  createUser,
  checkPassword,
} = require("../controllers/userController");

router.get("/users", async (req, res) => {
  try {
    const query = req.query;
    const users = await getUsers(query);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
});

router.post("/users", async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.send(user);
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
});

router.post("/users/checkPassword", async (req, res) => {
  try {
    const user = await checkPassword(req.body);
    if (user) {
      res.send(user);
    } else {
      res.status(401).send();
    }
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
});

module.exports = router;
