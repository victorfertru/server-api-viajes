const express = require("express");
const router = express.Router();

const estadoCivilService = require("../services/estadoCivilService");

router.get("/", async (_, res, next) => {
  try {
    const estados = await estadoCivilService.getAll();
    res.status(200).json(estados);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const estado = await estadoCivilService.getById(id);
    res.status(200).json(estado);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const estado = await estadoCivilService.create(req.body);
    res.status(200).json(estado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await estadoCivilService.edit(id, req.body);
    const estado = await estadoCivilService.getById(id);

    res.status(200).json(estado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await estadoCivilService.remove(id);
    res.status(200).json({ deleted: true });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
