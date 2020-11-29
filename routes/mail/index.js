const { Router } = require("express");

const router = Router();
const service = require("./service");

router.post("/mail", service.sendMail);

module.exports = router;
