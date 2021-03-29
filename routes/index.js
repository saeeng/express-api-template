const filenames = require("../modules/filenames");
const { Router } = require("express");

module.exports = (db) => {
  const router = Router();

  const routerNames = filenames(__dirname);

  routerNames.map((routerName) => {
    const serviceFactory = require(`./${routerName}/services`);
    const controllerFactory = require(`./${routerName}/controller.js`);

    const service = serviceFactory(db);
    const controller = controllerFactory(service);
    router.use(controller);
  });
  return router;
};
