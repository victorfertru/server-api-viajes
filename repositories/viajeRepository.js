const { Op } = require("sequelize");
const TipoDeViaje = require("../models/TipoDeViaje");
const Viaje = require("../models/Viaje");

// exports.findAllTravels = async () => {
//   return await Viaje.findAll(
//     {
//       order: [["createdAt", "ASC"]],
//       include: {
//         model: TipoDeViaje,
//         attributes: [["valor", "tipoDeViajeDesc"]],
//       },
//     },
//     {
//       raw: true,
//     }
//   );
// };

exports.findAllTravels = async ({ pageSize, page, sort }) => {
  const offset = pageSize * (page - 1);
  const limit = pageSize;

  let orderBy = "ASC";
  let sortBy = "createdAt";
  const order = [];
  if (sort) {
    sortBy = sort;
    if (sort.includes("-")) {
      orderBy = "DESC";
      sortBy = sort.replace("-", "");
    }
  }

  order.push([sortBy, orderBy]);

  return await Viaje.findAndCountAll({
    limit,
    offset,
    order,
    include: {
      model: TipoDeViaje,
      attributes: [["valor", "tipoDeViajeDesc"]],
    },
  });
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

  return await Viaje.findAll({
    where,
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
