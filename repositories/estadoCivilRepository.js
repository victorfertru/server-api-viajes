const EstadoCivil = require("../models/EstadoCivil");
exports.findAll = async () => {
  return await EstadoCivil.findAll({ order: [["createdAt", "ASC"]] });
};

exports.findById = async (id) => {
  return await EstadoCivil.findByPk(id);
};

exports.insert = async (estado) => {
  return await EstadoCivil.create(estado);
};

exports.update = async (id, estadoDetails) => {
  return await EstadoCivil.update(estadoDetails, { where: { id } });
};

exports.delete = async (id) => {
  return await EstadoCivil.destroy({ where: { id } });
};
