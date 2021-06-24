const tipoDeViajeRepository = require("../repositories/tipoDeViajeRepository");

exports.getAllTiposDeViajes = async () => {
  return await tipoDeViajeRepository.findAllTiposDeViajes();
};

exports.getTipoDeViajeById = async (id) => {
  if (!id) {
    throw new Error("You must provide ID");
  }
  const tipo = await tipoDeViajeRepository.findTipoDeViajeById(id);
  if (!tipo) throw new Error("No existe ningún tipo de viaje con la id " + id);
  return tipo.toJSON();
};

exports.createTipo = async (tipo) => {
  if (!tipo) throw new Error("You must provide `tipo de viaje`");
  return await tipoDeViajeRepository.insertTipoDeViaje(tipo);
};

exports.editTipoDeViaje = async (id, tipoDetails) => {
  if (!id) throw new Error();
  const tipo = await tipoDeViajeRepository.findTipoDeViajeById(id);

  if (!tipo) throw new Error("No existe ningún tipo de viaje con la id " + id);

  await tipoDeViajeRepository.updateTipoDeViaje(id, tipoDetails);
};

exports.removeTipo = async (id) => {
  if (!id) throw new Error("ID must be provided");
  const tipo = await tipoDeViajeRepository.findTipoDeViajeById(id);
  if (!tipo) throw new Error("No existe ningún tipo de viaje con la id " + id);

  await tipoDeViajeRepository.deleteTipoDeViaje(id);
};
