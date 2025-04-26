const express = require("express");
const router = express.Router();
const {
  addPayment,
  getPyamentByUId,
} = require("../controllers/paymentController");

router.get("/payments/:uid", async (req, res) => {
  try {
    const { uid } = req.params;
    const payments = await getPyamentByUId(uid);
    res.json(payments);
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
});

router.post("/payments", async (req, res) => {
  try {
    console.log(req.body);
    const payment = await addPayment(req.body);
    if (!payment) {
      res.send({ result: 500 });
      return;
    }
    res.send({ data: payment });
  } catch (err) {
    console.log(err);
    res.send({ result: 500, error: err.message });
  }
});

module.exports = router;
