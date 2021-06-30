const clienteRepository = require("../repositories/clienteRepository");
const { ERRORS } = require("../utils/constants");
const HttpError = require("../utils/httpError");

exports.getAllClientes = async () => {
  return await clienteRepository.findAllClientes();
};

exports.getClienteById = async (id) => {
  if (!id) {
    throw new HttpError(400, ERRORS.NONE_ID);
  }
  const cliente = await clienteRepository.findClienteById(id);

  if (!cliente) throw new HttpError(400, ERRORS.CUSTOMER_NOT_EXIST + id);

  return cliente.toJSON();
};

exports.createCliente = async (cliente) => {
  if (!cliente) throw new HttpError(400, ERRORS.NO_CUSTOMER);
  if (cliente.estadoCivilId === "") {
    delete cliente.estadoCivilId;
  }
  delete cliente.id;

  return await clienteRepository.insertCliente(cliente);
};

exports.editCliente = async (id, clienteDetails) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);
  const cliente = await clienteRepository.findClienteById(id);

  if (!cliente) throw new HttpError(400, ERRORS.CUSTOMER_NOT_EXIST + id);

  await clienteRepository.updateCliente(id, clienteDetails);
};

exports.removeCliente = async (id) => {
  if (!id) throw new HttpError(400, ERRORS.NONE_ID);
  const cliente = await clienteRepository.findClienteById(id);
  if (!cliente) throw new HttpError(400, ERRORS.CUSTOMER_NOT_EXIST + id);

  await clienteRepository.deleteCliente(id);
};
