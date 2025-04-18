const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../db");
const sequelizeInstance = dbConnect.Sequelize;
class PaymentItem extends Model {}
//Sequelize will create this table if it doesn't exist on startup
PaymentItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    paymentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    createdAt: {
      field: "created_at",
      type: DataTypes.DATE,
    },
    updatedAt: {
      field: "updated_at",
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "paymentItems", //uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = PaymentItem;
