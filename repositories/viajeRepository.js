const { Op } = require("sequelize");
const Viaje = require("../models/Viaje");
exports.findAllTravels = async () => {
  return await Viaje.findAll({ order: [["createdAt", "ASC"]] });
};

exports.searchTravel = async (filtro) => {
  console.log(filtro);
  const { tipoDeViajeId, nombre, destino } = filtro;
  const where = {
    tipoDeViajeId: tipoDeViajeId ? tipoDeViajeId : { [Op.like]: `%` },
    nombre: nombre ? { [Op.like]: `%${nombre}%` } : { [Op.like]: `%` },
    destino: destino ? { [Op.like]: `%${destino}%` } : { [Op.like]: `%` },
  };
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
