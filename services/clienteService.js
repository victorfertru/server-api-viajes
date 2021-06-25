const clienteRepository = require("../repositories/clienteRepository");

exports.getAllClientes = async () => {
  return await clienteRepository.findAllClientes();
};
