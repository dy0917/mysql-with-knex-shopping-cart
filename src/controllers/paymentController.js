"use strict";
const {
  addPaymentToDB,
  createPaymentWithPaymentItems,
  getPaymentsByUserIdFromDB,
} = require("../services/paymentService");

const addPayment = async ({ userId, products }) => {
  //creates a new user using JSON data POSTed in request body

  const payment = createPaymentWithPaymentItems({ userId, products });
  return payment;
};

const getPyamentByUId = async (userId) => {
  console.log(userId);
  return await getPaymentsByUserIdFromDB(userId);
};
module.exports = {
  addPayment,
  getPyamentByUId,
};
