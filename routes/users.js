const express = require("express");
const { IsTokenValid } = require("../middlewares/accessValidation");
const router = express.Router();
const userService = require("../services/userService");

router.post("/signup", async (req, res, next) => {
  try {
    await userService.signup(req.body);
    res.sendStatus(201);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userService.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.get("/", IsTokenValid(), async (_, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/search:name?", IsTokenValid(), async (req, res, next) => {
  try {
    const { name } = req.query;
    const user = await userService.searchUserByName(name);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
