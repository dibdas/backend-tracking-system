const FailedRequest = require("../models/FailedRequest");

const fetchMetrics = async (req, res) => {
  try {
    const fetchMetrics = await FailedRequest.find();
    const failedRequests = fetchMetrics.length;
    const uniqueErrors = new Set(fetchMetrics.map((entry) => entry.reason));
    const errorLogs = uniqueErrors.size;
    const ipTracking = fetchMetrics.reduce((accumalator, entry) => {
      accumalator[entry.ip] = accumalator[entry.ip]
        ? accumalator[entry.ip] + 1
        : 1;
      return accumalator;
    }, {});
    const response = {
      failedRequests,
      errorLogs,
      ipTracking,
    };

    res.status(200).json({ metrics: fetchMetrics, summary: response });
  } catch (err) {
    console.error("Error fetching metrics:", err.message);
    res.status(500).json({ error: "Failed to fetch metrics" });
  }
};
module.exports = fetchMetrics;
