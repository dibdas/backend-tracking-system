const nodemailer = require("nodemailer");
const dotEnvName = require("dotenv");
dotEnvName.config({ path: "./.env" });
console.log("..............ttttttttt.", process.env.USER);
const emailTransporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0e7ebaef4defae",
    pass: "a7c9aad6280c82",
  },
  logger: true, // Enables logging
  debug: true,
});
module.exports = emailTransporter;
