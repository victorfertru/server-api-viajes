const clienteRepository = require("../repositories/clienteRepository");

exports.getAllClientes = async () => {
  return await clienteRepository.findAllClientes();
};

exports.getClienteById = async (id) => {
  if (!id) {
    throw new Error("You must provide ID");
  }
  const cliente = await clienteRepository.findClienteById(id);

  if (!cliente) throw new Error("No existe ningún cliente con la id " + id);

  return cliente.toJSON();
};

exports.createCliente = async (cliente) => {
  if (!cliente) throw new Error("You must provide `cliente`");
  if (cliente.estadoCivilId === "") {
    delete cliente.estadoCivilId;
  }
  delete cliente.id;

  return await clienteRepository.insertCliente(cliente);
};

exports.editCliente = async (id, clienteDetails) => {
  if (!id) throw new Error();
  const cliente = await clienteRepository.findClienteById(id);

  if (!cliente) throw new Error("No existe ningún cliente con la id " + id);

  await clienteRepository.updateCliente(id, clienteDetails);
};

exports.removeCliente = async (id) => {
  if (!id) throw new Error("ID must be provided");
  const cliente = await clienteRepository.findClienteById(id);
  if (!cliente) throw new Error("No existe ningún cliente con la id " + id);

  await clienteRepository.deleteCliente(id);
};
