let { Product } = require("../models"); //matches index.js

const products = [];

const getProducts = async () => {
  const products = await Product.findAll({});
  return products;
};

module.exports = { getProducts };
