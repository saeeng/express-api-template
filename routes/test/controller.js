const { Router } = require("express");

module.exports = (svLoc) => {
  const router = Router();
  const service = svLoc.get(`testService`);

  // get
  router.get("/test", async (req, res, next) => {
    const [status, result] = await service.getTest(req.query.key);
    res.status(status).send(result);
  });

  // post
  router.post("/test", async (req, res, next) => {
    const [status, result] = await service.addTest(
      req.body.key,
      req.body.value
    );
    res.status(status).send(result);
  });

  //put

  //delete

  return router;
};
