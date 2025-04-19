const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../db");
const sequelizeInstance = dbConnect.Sequelize;
class Product extends Model {}
//Sequelize will create this table if it doesn't exist on startup
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      required: true,
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
    modelName: "products", //uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Product;
