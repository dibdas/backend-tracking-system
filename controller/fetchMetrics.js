const FailedRequest = require("../models/FailedRequest");

const fetchMetrics = async (req, res) => {
  const fetchMetrics = await FailedRequest.find();
  res.status(200).json(fetchMetrics);
};
module.exports = fetchMetrics;
