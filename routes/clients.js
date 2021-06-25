const express = require("express");
const router = express.Router();
const clienteService = require("../services/clienteService");

router.get("/", async (req, res, next) => {
  try {
    const clientes = await clienteService.getAllClientes();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const cliente = await clienteService.getClienteById(id);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const cliente = await clienteService.createCliente(req.body);
    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await clienteService.editCliente(id, req.body);
    const cliente = await clienteService.getClienteById(id);

    res.status(200).json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await clienteService.removeCliente(id);
    res.sendStatus(204);
    // res.status(200).json({ deleted: true });
  } catch (error) {
    res.status(404).json({ message: error.message });
    // res.status(200).json({ deleted: false });
  }
});

module.exports = router;
