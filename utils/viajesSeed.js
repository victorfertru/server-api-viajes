require("dotenv").config();

const Viaje = require("../models/Viaje");

const viajes = [
  {
    nombre: "Aventura en la Sierra",
    tipoDeViajeId: 5,
    duracion: 7,
    destino: "Granada",
    precio: 785,
    fechaSalida: "2022-01-04",
    plazas: 4,
    enOferta: true,
    estado: 2,
  },
  {
    nombre: "Pelazo de revista",
    tipoDeViajeId: 7,
    duracion: 5,
    destino: "Turquía",
    precio: 7585,
    fechaSalida: "2021-07-01",
    plazas: 5,
    enOferta: false,
    estado: 10,
  },
  {
    nombre: "Subida a la montaña",
    tipoDeViajeId: 5,
    duracion: 3,
    destino: "Pirineos",
    precio: 1785,
    fechaSalida: "2022-02-15",
    plazas: 3,
    enOferta: false,
    estado: 8,
  },
  {
    nombre: "Apadrina una cabra",
    tipoDeViajeId: 6,
    duracion: 2,
    destino: "Lagos",
    precio: 2850,
    fechaSalida: "2021-08-15",
    plazas: 4,
    enOferta: true,
    estado: 3,
  },
  {
    nombre: "Paseo por las Pirámides",
    tipoDeViajeId: 6,
    duracion: 4,
    destino: "Guiza",
    precio: 4585,
    fechaSalida: "2021-11-30",
    plazas: 6,
    enOferta: false,
    estado: 2,
  },
  {
    nombre: "Viaje imantado",
    tipoDeViajeId: 5,
    duracion: 6,
    destino: "Islas Bermudas",
    precio: 1785,
    fechaSalida: "2021-09-25",
    plazas: 3,
    enOferta: false,
    estado: 8,
  },
];

Viaje.bulkCreate(viajes).then(() => console.log("Viajes creados!✈"));
