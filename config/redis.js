const Redis = require("ioredis");
const redisClient = new Redis({
  host: "127.9.0.5",
  port: 6493,
});
redisClient.on("connect", () => console.log("redis connected"));
redisClient.on("error", (err) => console.error("redis error:", err));
module.exports = redisClient;
