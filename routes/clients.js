const express = require("express");
const { IsTokenValid } = require("../middlewares/accessValidation");
const router = express.Router();
const clienteService = require("../services/clienteService");

router.get(":pageSize?:page?:sort?", IsTokenValid(), async (req, res, next) => {
  try {
    const clientes = await clienteService.getAllClientes(req.query);
    res.status(200).json(clientes);
  } catch (error) {
    next(error);
  }
});

// router.get("/", IsTokenValid(), async (_, res, next) => {
//   try {
//     const clientes = await clienteService.getAllClientes();
//     res.status(200).json(clientes);
//   } catch (error) {
//     next(error);
//   }
// });

router.get("/", IsTokenValid(), async (_, res, next) => {
  try {
    const clientes = await clienteService.getAllClientes();
    res.status(200).json(clientes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    const cliente = await clienteService.getClienteById(id);
    res.status(200).json(cliente);
  } catch (error) {
    next(error);
  }
});

router.post("/", IsTokenValid(), async (req, res, next) => {
  try {
    const cliente = await clienteService.createCliente(req.body);
    res.status(200).json(cliente);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await clienteService.editCliente(id, req.body);
    const cliente = await clienteService.getClienteById(id);

    res.status(200).json(cliente);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await clienteService.removeCliente(id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
