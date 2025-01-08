const express = require("express");
const router = express.Router();
router.post("/api/submit", validateRequest);
router.get("/api/metrics", fetchMetrics);
module.exports = router;
