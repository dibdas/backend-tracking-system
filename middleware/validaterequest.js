// // const redisClient = require('../services/redisClient');
// // const { sendAlertEmail } = require('../services/emailService');
// const FailedRequest = require("../models/FailedRequest");
// const trackFailure = require("../services/trackerService");
// const THRESHOLD = 5;
// const submitControllerRequest = async (req, res, next) => {
//   const clientIp = req.ip;

//   // Validate token
//   if (
//     !headers["authorization"] ||
//     headers["authorization"] !== process.env.ACCESS_TOKEN
//   ) {
//     // const attempts = await redisClient.incr(ip);
//     // if (attempts === 1) redisClient.expire(ip, 600); // Set TTL for 10 minutes
//     const now = Date.now();
//     const reason = "Invalid Authorization Hedaer";
//     const attempts = trackFailure(clientIp);
//     await FailedRequest.create({ clientIp, timestamp: now, reason });

//     if (attempts > THRESHOLD) {
//       sendAlertEmail(ip, attempts);
//     }

//     return res.status(403).json({ error: "Invalid headers or token" });
//   }
// };
// module.exports = submitControllerRequest;
