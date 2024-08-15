const express = require("express");
const router = express.Router();
const policyController = require("../controlers/policy.js");




router.get("/",policyController.renderpolicy);
router.get("/contact",policyController.rendercontact);
module.exports = router;