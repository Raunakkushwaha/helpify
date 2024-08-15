const express = require("express");
const router = express.Router();
const trendingController = require("../controlers/trending.js");




router.get("/",trendingController.rendertrending);
module.exports = router;