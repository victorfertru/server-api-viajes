require("dotenv").config();
const TipoDeViaje = require("../models/TipoDeViaje");

const tiposDeViaje = [
  {
    valor: "Familiar",
  },
  {
    valor: "Trabajo",
  },
  {
    valor: "Luna de miel",
  },
  {
    valor: "Ahora mismo, ¡por favor!",
  },
  {
    valor: "Aventura",
  },
  {
    valor: "Cultural",
  },
  {
    valor: "Luxury",
  },
  {
    valor: "Gastronómico",
  },
];

TipoDeViaje.bulkCreate(tiposDeViaje).then(() =>
  console.log("Tipos de viaje creados!")
);
