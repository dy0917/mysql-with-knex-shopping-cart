const express = require("express");
const router = express.Router();
const { getProducts } = require("../services/productService");
router.get("/products", async (req, res) => {
  const products = await getProducts();
  res.json(products);
});

module.exports = router;
