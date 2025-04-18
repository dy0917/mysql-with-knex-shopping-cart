const express = require("express");
require("dotenv").config();
require("./db");
const userRoute = require("./routes/userRoute");
const paymentRoute = require("./routes/paymentRoute");
const productRoute = require("./routes/productRoute");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRoute);
app.use("/api", paymentRoute);
app.use("/api", productRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
