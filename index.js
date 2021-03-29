require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const dbFactory = require("./db");
const db = dbFactory("./levdb");

const routerFactory = require("./routes");
const routers = routerFactory(db);

app.use("/api", routers);

module.exports = app;
