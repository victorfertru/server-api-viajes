const estadoCivilRepository = require("../repositories/estadoCivilRepository");
const { ERRORS } = require("../utils/constants");
const HttpError = require("../utils/httpError");

exports.getAll = async () => {
  return await estadoCivilRepository.findAll();
};

exports.getById = async (id) => {
  if (!id) {
    throw new HttpError(400, ERRORS.NONE_ID);
  }
  const tipo = await estadoCivilRepository.findById(id);
  if (!tipo) throw new HttpError(400, ERRORS.MS_NOT_EXIST + id);
  return tipo.toJSON();
};

exports.create = async (tipo) => {
  if (!tipo) throw new HttpError(400, ERRORS.NO_MARITALSTATUS);
  return await estadoCivilRepository.insert(tipo);
};

exports.edit = async (id, estadoDetails) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);
  const tipo = await estadoCivilRepository.edit(id);

  if (!tipo) throw new HttpError(400, ERRORS.MS_NOT_EXIST + id);

  await estadoCivilRepository.updateTipoDeViaje(id, estadoDetails);
};

exports.remove = async (id) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);
  const tipo = await estadoCivilRepository.delete(id);
  if (!tipo) throw new HttpError(400, ERRORS.MS_NOT_EXIST + id);

  await estadoCivilRepository.deleteTipoDeViaje(id);
};
