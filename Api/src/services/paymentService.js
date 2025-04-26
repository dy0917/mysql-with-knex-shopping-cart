let { Payment, PaymentItem, Product } = require("../models"); //matches index.js
const { Sequelize } = require("../db");
const addPaymentToDB = async (data) => {
  const payment = await new Payment(data).save();
  return payment;
};

const createPaymentWithPaymentItems = async ({ userId, products }) => {
  const now = new Date();
  const totalAmount = products.reduce(
    (n, { price }) => n + parseFloat(price),
    0
  );
  try {
    const payment = await Sequelize.transaction(async (t) => {
      const payment = await Payment.create(
        {
          userId,
          created_at: now,
          updated_at: now,
          totalAmount,
        },
        { transaction: t }
      );

      await PaymentItem.bulkCreate(
        products.map((p) => {
          return {
            paymentId: payment.id,
            productId: p.id,
            created_at: now,
            updated_at: now,
          };
        }),
        { transaction: t }
      );

      return payment;
    });
    return payment;
  } catch (e) {
    console.log(e);
    return;
  }
};

const getPaymentsByUserIdFromDB = async (userId) => {
  const payments = await Payment.findAll({
    where: { userId },
    include: {
      model: PaymentItem,
      required: false, // This makes the join optional
      include: {
        model: Product, // Include the associated Product
        required: false, // Make it optional if some PaymentItems do not have a Product
      },
    },
  });
  return payments;
};

module.exports = {
  addPaymentToDB,
  getPaymentsByUserIdFromDB,
  createPaymentWithPaymentItems,
};
