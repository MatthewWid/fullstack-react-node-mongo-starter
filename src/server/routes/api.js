const router = require("express").Router();
const wrap = require("../helpers/wrapAsync");

const baseController = require("../controllers/base.controller.js");

router.get("/ping", baseController.ping);

module.exports = router;
