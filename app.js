require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const svcLoc = require("./modules/serviceLoacator")();

svcLoc.register("dbName", "levdb");
svcLoc.factory("db", require("./db"));
svcLoc.factory("router", require("./routes"));

app.use("/api", svcLoc.get("router"));

module.exports = app;
