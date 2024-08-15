const express = require("express");
const router = express.Router();
const filterController = require("../controlers/filter.js");




router.get("/",filterController.renderfilter);
module.exports = router;