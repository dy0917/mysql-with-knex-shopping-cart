"use strict";
const User = require("./user"); //require the model
const Payment = require("./payment"); //require the model
const PaymentItem = require("./paymentItem"); //require the model
const Product = require("./product");

User.hasMany(Payment, { foreignKey: "userId" });
Payment.belongsTo(User, { foreignKey: "userId" });
Payment.hasMany(PaymentItem, { foreignKey: "paymentId" });
PaymentItem.belongsTo(Payment, { foreignKey: "paymentId" });

Product.hasOne(PaymentItem, { foreignKey: "productId" });
PaymentItem.belongsTo(Product, { foreignKey: "productId" });

module.exports = {
  User, //export the model
  Payment,
  PaymentItem,
  Product,
};
