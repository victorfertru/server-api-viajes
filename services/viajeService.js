const Viaje = require("../models/Viaje");
const viajeRepository = require("../repositories/viajeRepository");
const { ERRORS } = require("../utils/constants");
const HttpError = require("../utils/httpError");

// exports.getAllTravels = async () => {
//   return await viajeRepository.findAllTravels();
// };

exports.getAllTravels = async (pagination) => {
  const { pageSize = 10, page = 1, sort } = pagination;

  return await viajeRepository.findAllTravels({
    pageSize: +pageSize,
    page: +page,
    sort,
  });
};

exports.getTravelById = async (id) => {
  if (!id) {
    throw new HttpError(400, ERRORS.NONE_ID);
  }
  const viaje = await viajeRepository.findTravelById(id);

  if (!viaje) throw new HttpError(400, ERRORS.TRAVEL_NOT_EXIST + id);

  return viaje.toJSON();
};

exports.createTravel = async (viaje) => {
  if (!viaje) throw new HttpError(400, ERRORS.NO_TRAVEL);

  delete viaje.id;
  if (viaje.estado === "") {
    viaje.estado = 1;
  }

  if (viaje.oferta === "") {
    viaje.oferta = false;
  }

  return await viajeRepository.insertTravel(viaje);
};

exports.search = async (filter) => {
  return await viajeRepository.searchTravel(filter);
};

exports.editTravel = async (id, travelDetails) => {
  if (!id) throw new Error();
  const viaje = await viajeRepository.findTravelById(id);

  if (!viaje) throw new HttpError(400, ERRORS.TRAVEL_NOT_EXIST + id);

  viaje.TipoDeViajeId = travelDetails.tipoDeViajeId;
  await viajeRepository.updateTravel(id, travelDetails);
};

exports.removeTravel = async (id) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);
  const viaje = await viajeRepository.findTravelById(id);
  if (!viaje) throw new HttpError(400, ERRORS.TRAVEL_NOT_EXIST + id);

  await viajeRepository.deleteTravel(id);
};
