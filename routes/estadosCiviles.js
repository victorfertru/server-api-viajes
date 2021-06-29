const express = require("express");
const { IsTokenValid } = require("../middlewares/accessValidation");
const router = express.Router();

const estadoCivilService = require("../services/estadoCivilService");

router.get("/", IsTokenValid(), async (_, res, next) => {
  try {
    const estados = await estadoCivilService.getAll();
    res.status(200).json(estados);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    const estado = await estadoCivilService.getById(id);
    res.status(200).json(estado);
  } catch (error) {
    next(error);
  }
});

router.post("/", IsTokenValid(), async (req, res, next) => {
  try {
    const estado = await estadoCivilService.create(req.body);
    res.status(200).json(estado);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await estadoCivilService.edit(id, req.body);
    const estado = await estadoCivilService.getById(id);

    res.status(200).json(estado);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await estadoCivilService.remove(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
