require("dotenv").config();
const EstadoCivil = require("../models/EstadoCivil");

const estadosCiviles = [
  {
    descripcion: "Soltero",
  },
  {
    descripcion: "Casado",
  },
  {
    descripcion: "Divorciado",
  },
  {
    descripcion: "Viudo",
  },
  // {
  //   id: 0,
  //   descripcion: "",
  // },
];

EstadoCivil.bulkCreate(estadosCiviles).then(() =>
  console.log("¡Estados civiles creados!")
);
