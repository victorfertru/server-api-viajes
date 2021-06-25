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

  //   return await dbConnection.query(
  //     "SELECT clientes.id, nombre,dni, telefono, descripcion as estadoCivilDesc from `clientes` inner join `estadosciviles` on clientes.estadoCivilId = estadosciviles.id",
  //     { type: dbConnection.QueryTypes.SELECT }
  //   );
};
