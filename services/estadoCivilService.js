const estadoCivilRepository = require("../repositories/estadoCivilRepository");

exports.getAll = async () => {
  return await estadoCivilRepository.findAll();
};

exports.getById = async (id) => {
  if (!id) {
    throw new Error("You must provide ID");
  }
  const tipo = await estadoCivilRepository.findById(id);
  if (!tipo) throw new Error("No existe ningún estado civil con la id " + id);
  return tipo.toJSON();
};

exports.create = async (tipo) => {
  if (!tipo) throw new Error("You must provide `estado civil`");
  return await estadoCivilRepository.insert(tipo);
};

exports.edit = async (id, estadoDetails) => {
  if (!id) throw new Error();
  const tipo = await estadoCivilRepository.edit(id);

  if (!tipo) throw new Error("No existe ningún estado civil con la id " + id);

  await estadoCivilRepository.updateTipoDeViaje(id, estadoDetails);
};

exports.remove = async (id) => {
  if (!id) throw new Error("ID must be provided");
  const tipo = await estadoCivilRepository.delete(id);
  if (!tipo) throw new Error("No existe ningún estado civil con la id " + id);

  await estadoCivilRepository.deleteTipoDeViaje(id);
};
