const { DataTypes } = require("sequelize");
const dbConnection = require("../config/db");

const Viaje = dbConnection.define("Viaje", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  destino: {
    type: DataTypes.STRING,
  },
  duracion: {
    type: DataTypes.INTEGER,
  },
  plazas: {
    type: DataTypes.INTEGER,
  },
  precio: {
    type: DataTypes.DECIMAL(8, 2),
    allowNull: true,
  },
  enOferta: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  estado: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaSalida: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  tipoDeViajeId: {
    type: DataTypes.INTEGER,
    // defaultValue: 0,
  },
});

module.exports = Viaje;
