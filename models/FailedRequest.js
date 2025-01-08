const mongoose = require("mongoose");
const failedRequest = new mongoose.Schema({
  ip: String,
  timestamp: Date,
  reason: String,
});
module.exports = mongoose.model("FailedRequest", failedRequest);
