const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Cliente = dbConnection.define("Cliente", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  nombre: {
    type: DataTypes.STRING(35),
  },
  apellidos: {
    type: DataTypes.STRING(50),
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
  },
  direccion: {
    type: DataTypes.STRING(70),
  },
  dni: {
    type: DataTypes.STRING(10),
  },
  telefono: {
    type: DataTypes.STRING(20),
  },
  fechaNacimiento: {
    type: DataTypes.DATE,
  },
  estadoCivilId: {
    type: DataTypes.TINYINT(),
  },
});

module.exports = Cliente;
