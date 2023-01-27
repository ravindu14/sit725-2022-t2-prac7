const express = require("express");
const router = express.Router();
const dogRoutes = require("./dogRoutes");

router.use("/cards", dogRoutes);

module.exports = router;
