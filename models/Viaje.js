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
    allowNull: false,
  },
  destino: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duracion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plazas: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
  },
});

module.exports = Viaje;
