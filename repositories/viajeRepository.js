const { Op } = require("sequelize");
const Viaje = require("../models/Viaje");
exports.findAllTravels = async () => {
  return await Viaje.findAll({ order: [["createdAt", "ASC"]] });
};

exports.searchTravel = async (filtro) => {
  const { tipoDeViajeId, nombre, destino } = filtro;

  const where = {};

  if (tipoDeViajeId) {
    where.tipoDeViajeId = tipoDeViajeId;
  }
  if (nombre) {
    where.nombre = { [Op.like]: `%${nombre}%` };
  }
  if (destino) {
    where.destino = { [Op.like]: `%${destino}%` };
  }

  return await Viaje.findAll({ where });
};

exports.findTravelById = async (id) => {
  return await Viaje.findByPk(id);
};

exports.insertTravel = async (travel) => {
  return await Viaje.create(travel);
};

exports.updateTravel = async (id, travelDetails) => {
  return await Viaje.update(travelDetails, { where: { id } });
};

exports.deleteTravel = async (id) => {
  return await Viaje.destroy({ where: { id } });
};
