const TipoDeViaje = require("../models/TipoDeViaje");
exports.findAllTiposDeViajes = async () => {
  return await TipoDeViaje.findAll({ order: [["createdAt", "ASC"]] });
};

exports.findTipoDeViajeById = async (id) => {
  return await TipoDeViaje.findByPk(id);
};

exports.insertTipoDeViaje = async (tipo) => {
  return await TipoDeViaje.create(tipo);
};

exports.updateTipoDeViaje = async (id, tipoDeViajeDetails) => {
  return await TipoDeViaje.update(tipoDeViajeDetails, { where: { id } });
};

exports.deleteTipoDeViaje = async (id) => {
  return await TipoDeViaje.destroy({ where: { id } });
};
