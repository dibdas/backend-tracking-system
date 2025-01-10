const express = require("express");
const router = express.Router();
const fetchMetrics = require("../controller/fetchMetrics");
const submitControllerRequest = require("../controller/submitController");
console.log("reouter");
router.post("/submit", submitControllerRequest);
router.get("/metrics", fetchMetrics);
module.exports = router;
