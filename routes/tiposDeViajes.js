const express = require("express");
const { IsTokenValid } = require("../middlewares/accessValidation");
const router = express.Router();

const tipoDeViajeService = require("../services/tipoDeViajeService");

router.get("/", IsTokenValid(), async (_, res, next) => {
  try {
    const tipos = await tipoDeViajeService.getAllTiposDeViajes();
    res.status(200).json(tipos);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    const tipo = await tipoDeViajeService.getTipoDeViajeById(id);
    res.status(200).json(tipo);
  } catch (error) {
    next(error);
  }
});

router.post("/", IsTokenValid(), async (req, res, next) => {
  try {
    const tipo = await tipoDeViajeService.createTipo(req.body);
    res.status(200).json(tipo);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await tipoDeViajeService.editTipoDeViaje(id, req.body);
    const tipo = await tipoDeViajeService.getTipoDeViajeById(id);

    res.status(200).json(tipo);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await tipoDeViajeService.removeTipo(id);
    res.status(200).json({ deleted: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
