const router = require("express").Router();
const wrap = require("../helpers/wrapAsync");

const baseController = require("../controllers/baseController.js");

router.get("/ping", baseController.ping);

module.exports = router;
