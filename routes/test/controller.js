module.exports = (testService, router, wrapAsync) => {
  const _router = router;
  // get
  _router.get(
    "/test",
    wrapAsync(async (req, res, next) => {
      const [status, result] = await testService.getTest(req.query.key);
      res.status(status).send(result);
    })
  );

  // post
  _router.post(
    "/test",
    wrapAsync(async (req, res, next) => {
      const [status, result] = await testService.addTest(
        req.body.key,
        req.body.value
      );
      res.status(status).send(result);
    })
  );

  //put

  //delete

  return _router;
};
