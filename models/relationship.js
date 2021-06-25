const dbConnection = require("../config/db");
const Viaje = require("./Viaje");
const TipoDeViaje = require("./TipoDeViaje");
const User = require("../models/User");
const EstadoCivil = require("./EstadoCivil");
const Cliente = require("./Cliente");

const loadModels = () => {
  TipoDeViaje.hasMany(Viaje, {
    sourceKey: "id",
    foreignKey: { name: "tipoDeViajeId", allowNull: false },
  });
  Viaje.belongsTo(TipoDeViaje);

  EstadoCivil.hasMany(Cliente, {
    sourceKey: "id",
    foreignKey: { name: "estadoCivilId", allowNull: false },
  });
  Cliente.belongsTo(EstadoCivil);

  dbConnection.sync({}).then(() => console.log("Everything is fine! 🔥"));
};

module.exports = loadModels;
