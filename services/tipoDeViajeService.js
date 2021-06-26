const tipoDeViajeRepository = require("../repositories/tipoDeViajeRepository");
const { ERRORS } = require("../utils/constants");
const HttpError = require("../utils/httpError");

exports.getAllTiposDeViajes = async () => {
  return await tipoDeViajeRepository.findAllTiposDeViajes();
};

exports.getTipoDeViajeById = async (id) => {
  if (!id) {
    throw new HttpError(400, ERRORS.NONE_ID);
  }
  const tipo = await tipoDeViajeRepository.findTipoDeViajeById(id);
  if (!tipo) throw new HttpError(400, ERRORS.TT_NOT_EXIST + id);
  return tipo.toJSON();
};

exports.createTipo = async (tipo) => {
  if (!tipo) throw new HttpError(400, ERRORS.NO_TRIPTYPE);
  return await tipoDeViajeRepository.insertTipoDeViaje(tipo);
};

exports.editTipoDeViaje = async (id, tipoDetails) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);
  const tipo = await tipoDeViajeRepository.findTipoDeViajeById(id);

  if (!tipo) throw new HttpError(400, ERRORS.TT_NOT_EXIST + id);

  await tipoDeViajeRepository.updateTipoDeViaje(id, tipoDetails);
};

exports.removeTipo = async (id) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);
  const tipo = await tipoDeViajeRepository.findTipoDeViajeById(id);
  if (!tipo) throw new HttpError(400, ERRORS.TT_NOT_EXIST + id);

  await tipoDeViajeRepository.deleteTipoDeViaje(id);
};
