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
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  dni: {
    type: DataTypes.STRING(10),
    allowNull: false,
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
