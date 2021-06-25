const express = require("express");
const router = express.Router();
const clienteService = require("../services/clienteService");

// const clientes = [
//   {
//     id: "1",
//     nombre: "Gertrudis",
//     dni: "12345678b",
//     telefono: "666555333",
//     estadoCivilDesc: "Soltero",
//   },
//   {
//     id: "2",
//     nombre: "Hermenegildo",
//     dni: "87654321A",
//     telefono: "777666555",
//     estadoCivilDesc: "Viudo",
//   },
// ];

// router.get("/", (req, res) => {
//   res.status(200).json(clientes);
// });

router.get("/", async (req, res, next) => {
  try {
    const clientes = await clienteService.getAllClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
