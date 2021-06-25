require("dotenv").config();
const Cliente = require("../models/Cliente");

const clientes = [
  {
    nombre: "Ataulfo",
    apellidos: "Papa",
    direccion: "Calle falsa, 1, 2 ,3",
    telefono: "666555333",
    dni: "55544433a",
    email: "ataulto@papadopoulus.com",
    fechaNacimiento: "1965-10-15",
    estadoCivilId: 2,
  },
  {
    nombre: "Hermenegildo",
    apellidos: "Lores de Cabeza",
    direccion: "Calle la piruleta, 23",
    telefono: "777666555",
    dni: "11122233b",
    email: "ataulto@papadopoulus.com",
    fechaNacimiento: "1925-5-28",
    estadoCivilId: 3,
  },
  {
    nombre: "Gertrudis",
    apellidos: "Fuensanta",
    direccion: "Calle Algarroba, 3 24B",
    telefono: "666444222",
    dni: "66688844h",
    email: "gertrudis@gmail.com",
    fechaNacimiento: "1905-1-1",
  },
];

Cliente.bulkCreate(clientes).then(() => console.log("¡Clientes creados!"));
