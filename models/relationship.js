const dbConnection = require("../config/db");
const Viaje = require("./Viaje");
const TipoDeViaje = require("./TipoDeViaje");
const User = require("../models/User");

const loadModels = () => {
  TipoDeViaje.hasMany(Viaje, {
    sourceKey: "id",
    foreignKey: { name: "tipoDeViajeId", allowNull: false },
  });
  Viaje.belongsTo(TipoDeViaje);

  dbConnection.sync({}).then(() => console.log("Everything is fine! 🔥"));
};

module.exports = loadModels;
