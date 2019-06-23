const router = require("express").Router();
const apiRoutes = require("./api.js");

const baseController = require("../controllers/baseController.js");

// API
router.use("/api", apiRoutes);
// SPA
router.get("*", baseController.indexPage);

module.exports = router;
