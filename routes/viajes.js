const express = require("express");
const { IsTokenValid } = require("../middlewares/accessValidation");
const router = express.Router();
const viajeService = require("../services/viajeService");

router.get(":pageSize?:page?:sort?", IsTokenValid(), async (req, res, next) => {
  try {
    const pagination = await viajeService.getAllTravels(req.query);
    res.status(200).json(pagination);
  } catch (error) {
    next(error);
  }
});
// router.get("/", IsTokenValid(), async (_, res, next) => {
//   try {
//     const viajes = await viajeService.getAllTravels();
//     res.status(200).json(viajes);
//   } catch (error) {
//     next(error);
//   }
// });

router.get(
  "/search:tipoDeViajeId?:nombre?:destino?",

  async (req, res, next) => {
    try {
      const viajes = await viajeService.search(req.query);
      res.status(200).json(viajes);
    } catch (error) {
      next(error);
    }
  }
);
router.get("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    const viaje = await viajeService.getTravelById(id);
    res.status(200).json(viaje);
  } catch (error) {
    next(error);
  }
});

router.post("/", IsTokenValid(), async (req, res, next) => {
  try {
    const viaje = await viajeService.createTravel(req.body);
    res.status(200).json(viaje);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await viajeService.editTravel(id, req.body);
    const viaje = await viajeService.getTravelById(id);

    res.status(200).json(viaje);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", IsTokenValid(), async (req, res, next) => {
  try {
    const { id } = req.params;
    await viajeService.removeTravel(id);
    res.sendStatus(204);
    // res.status(200).json({ deleted: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
