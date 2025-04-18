let { Product } = require("../models"); //matches index.js

const getProducts = async () => {
  const users = await Product.findAll({});
  return users;
};

module.exports = { getProducts };
