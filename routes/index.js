const filenames = require("../modules/filenames");
const { Router } = require("express");

module.exports = (svLoc) => {
  const router = Router();
  const _svLoc = svLoc;
  const routerNames = filenames(__dirname);

  routerNames.map((routerName) => {
    _svLoc.factory(`${routerName}Service`, require(`./${routerName}/service`));
    _svLoc.factory(
      `${routerName}Controller`,
      require(`./${routerName}/controller.js`)
    );

    const controller = _svLoc.get(`${routerName}Controller`);
    router.use(controller);
  });
  return router;
};
