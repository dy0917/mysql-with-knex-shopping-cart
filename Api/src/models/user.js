const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../db");
const sequelizeInstance = dbConnect.Sequelize;
class User extends Model {}
//Sequelize will create this table if it doesn't exist on startup
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      required: true,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
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
    modelName: "users", //uselowercase plural format
    timestamps: true,
    freezeTableName: true,
    scopes: {
      withoutPassword: {
        attributes: { exclude: ["password"] },
      },
    },
  }
);
User.afterCreate((user, opts) => {
  // Prevent from return password after create user
  delete user.dataValues.password;
});
module.exports = User;
