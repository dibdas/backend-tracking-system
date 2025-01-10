const nodemailer = require("nodemailer");

const TOKEN = process.env.TOKEN;

const emailTransporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  token: TOKEN,
  port: 2525,
  auth: {
    user: "85397e0bc2bde9",
    pass: "70d5a4175b99f8",
  },
  logger: true, // Enables logging
  debug: true,
});
module.exports = emailTransporter;
