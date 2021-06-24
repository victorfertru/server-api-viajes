const express = require("express");
const router = express.Router();

const tipoDeViajeService = require("../services/tipoDeViajeService");

router.get("/", async (_, res, next) => {
  try {
    const tipos = await tipoDeViajeService.getAllTiposDeViajes();
    res.status(200).json(tipos);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const tipo = await tipoDeViajeService.getTipoDeViajeById(id);
    res.status(200).json(tipo);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const tipo = await tipoDeViajeService.createTipo(req.body);
    res.status(200).json(tipo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await tipoDeViajeService.editTipoDeViaje(id, req.body);
    const tipo = await tipoDeViajeService.getTipoDeViajeById(id);

    res.status(200).json(tipo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await tipoDeViajeService.removeTipo(id);
    res.status(200).json({ deleted: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
