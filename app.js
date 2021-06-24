require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const viajesRouter = require("./routes/viajes");
const tiposDeViajeRouter = require("./routes/tiposDeViajes");
const loadModels = require("./models/relationship");
const app = express();
loadModels();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/viajes/tiposDeViaje", tiposDeViajeRouter);
app.use("/viajes", viajesRouter);

module.exports = app;
