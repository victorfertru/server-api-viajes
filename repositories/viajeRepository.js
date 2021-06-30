const { Op } = require("sequelize");
const TipoDeViaje = require("../models/TipoDeViaje");
const Viaje = require("../models/Viaje");

exports.searchTravel = async (filtro) => {
  const where = {};
  let orderBy = "ASC";
  let sortBy = "createdAt";
  const order = [];
  let offset = 0;
  let limit = 5;

  if (filtro) {
    let { tipoDeViajeId, nombre, destino, pageSize, page, sort } = filtro;

    offset = +pageSize * (page - 1);
    limit = +pageSize;

    if (sort) {
      sortBy = sort;
      if (sort.includes("-")) {
        orderBy = "DESC";
        sortBy = sort.replace("-", "");
      }
    }

    if (tipoDeViajeId) {
      where.tipoDeViajeId = tipoDeViajeId;
    }
    if (nombre) {
      where.nombre = { [Op.like]: `%${nombre}%` };
    }
    if (destino) {
      where.destino = { [Op.like]: `%${destino}%` };
    }
  }

  order.push([sortBy, orderBy]);

  return await Viaje.findAndCountAll({
    where,
    limit,
    offset,
    order,
    include: {
      model: TipoDeViaje,
      attributes: [["valor", "tipoDeViajeDesc"]],
    },
  });
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
