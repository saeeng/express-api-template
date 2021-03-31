module.exports = (userService, router) => {
  // get
  router.get("/test", async (req, res, next) => {
    const [status, result] = await userService.getUser(req.query.key);
    res.status(status).send(result);
  });

  // post
  router.post("/test", async (req, res, next) => {
    const [status, result] = await userService.addUser(
      req.body.key,
      req.body.value
    );
    res.status(status).send(result);
  });

  //put

  //delete

  return router;
};
