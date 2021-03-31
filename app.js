require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var { Router } = require("express");
var cookieParser = require("cookie-parser");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const diContainer = require("./modules/diContainer")();

diContainer.register("dbName", "levdb");
diContainer.factory("db", require("./db"));

diContainer.factory("router", () => Router());
const wrapAsync = (fn) => (req, res, next) => fn(req, res, next).catch(next);
diContainer.factory("wrapAsync", () => wrapAsync);

const filenames = require("./modules/filenames");
const routeNames = filenames("./routes");

routeNames.map((serviceName) => {
  diContainer.factory(
    `${serviceName}Service`,
    require(`./routes/${serviceName}/service`)
  );
  diContainer.factory(
    `${serviceName}Controller`,
    require(`./routes/${serviceName}/controller`)
  );
  const router = diContainer.get(`${serviceName}Controller`);
  app.use("/api", router);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
module.exports = app;
