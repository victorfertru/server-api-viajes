const Viaje = require("../models/Viaje");
const viajeRepository = require("../repositories/viajeRepository");

exports.getAllTravels = async () => {
  return await viajeRepository.findAllTravels();
};
exports.getTravelById = async (id) => {
  if (!id) {
    throw new Error("You must provide ID");
  }
  const viaje = await viajeRepository.findTravelById(id);

  if (!viaje) throw new Error("No existe ningún viaje con la id " + id);

  return viaje.toJSON();
};

exports.createTravel = async (viaje) => {
  if (!viaje) throw new Error("You must provide `travel`");

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

  if (!viaje) throw new Error("No existe ningún viaje con la id " + id);

  viaje.TipoDeViajeId = travelDetails.tipoDeViajeId;
  await viajeRepository.updateTravel(id, travelDetails);
};

exports.removeTravel = async (id) => {
  if (!id) throw new Error("ID must be provided");
  const viaje = await viajeRepository.findTravelById(id);
  if (!viaje) throw new Error("No existe ningún viaje con la id " + id);

  await viajeRepository.deleteTravel(id);
};
