const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");
const { ROLE } = require("../utils/constants");

const User = dbConnection.define(
  "User",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING(35),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(10),
      defaultValue: ROLE.USER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(35),
      allowNull: false,
    },
  },
  {
    defaultScope: { attributes: { exclude: ["password"] } },
    scopes: { withPassword: { attributes: {} } },
  }
);

User.prototype.toJSON = function () {
  const attributes = Object.assign({}, this.get());
  delete attributes.password;
  return attributes;
};

module.exports = User;
