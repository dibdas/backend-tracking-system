const redisClient = require("../config/redis");

const WINDOW_TIME = 10 * 60 * 1000; // 10 minutes

const trackFailure = async (clientIp) => {
  try {
    const failures = await redisClient.incr(clientIp);
    if (failures === 1) {
      await redisClient.expire(clientIp, WINDOW_TIME);
    }
    return failures;
  } catch (err) {
    console.error("Error tracking failure attempts:", err);
    throw err;
  }
};
module.exports = { trackFailure };
