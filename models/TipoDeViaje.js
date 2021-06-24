const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const TipoDeViaje = dbConnection.define("tipoDeViaje", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  valor: {
    type: DataTypes.STRING,
  },
});

module.exports = TipoDeViaje;
