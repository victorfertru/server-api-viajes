const dbConnection = require("../config/db");
const { QueryTypes } = require("sequelize");
const Cliente = require("../models/Cliente");

const EstadoCivil = require("../models/EstadoCivil");
exports.findAllClientes = async () => {
  return await Cliente.findAll(
    {
      attributes: ["id", "nombre", "dni", "telefono"],
      include: {
        model: EstadoCivil,
        attributes: [["descripcion", "estadoCivilDesc"]],
      },
    },
    {
      raw: true,
    }
  );
};

exports.findClienteById = async (id) => {
  return await Cliente.findByPk(id);
};

exports.insertCliente = async (cliente) => {
  return await Cliente.create(cliente);
};

exports.updateCliente = async (id, clienteDetails) => {
  return await Cliente.update(clienteDetails, { where: { id } });
};

exports.deleteCliente = async (id) => {
  return await Cliente.destroy({ where: { id } });
};
