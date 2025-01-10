const FailedRequest = require("../models/FailedRequest");
const { trackFailure } = require("../services/trackerService");
const sendAlertEmail = require("../services/emailServices");
const THRESHOLD = 5;
const submitControllerRequest = async (req, res) => {
  const clientIp = req.ip;

  const headers = req.headers;
  const access_token = headers.authorization.split(" ")[1];

  // Validate token
  if (
    !headers ||
    !headers.authorization ||
    access_token !== process.env.ACCESS_TOKEN
  ) {
    const now = Date.now();
    const reason = "Invalid Authorization Hedaer";

    try {
      const attempts = await trackFailure(clientIp);
      await FailedRequest.create({ ip: clientIp, timestamp: now, reason });

      if (attempts > THRESHOLD) {
        sendAlertEmail(clientIp, attempts);
      }

      return res.status(403).json({ error: "Invalid headers or token" });
    } catch (err) {
      console.error("Error in submitControllerRequest:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  res.status(201).json({ msg: "Request done successfully" });
};
module.exports = submitControllerRequest;
