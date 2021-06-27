const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const EstadoCivil = dbConnection.define(
  "estadoCivil",
  {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.TINYINT,
      autoIncrement: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "estadosCiviles",
  }
);

module.exports = EstadoCivil;
