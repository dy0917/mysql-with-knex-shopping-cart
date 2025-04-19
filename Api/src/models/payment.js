const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../db");
const sequelizeInstance = dbConnect.Sequelize;
class Payment extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
    },
    totalAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      required: true,
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "payments", //uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Payment;
