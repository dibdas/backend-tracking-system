const transporter = require("../config/smtp");

const sendEmailAlert = async (clientIp) => {
  const mailOptions = {
    from: "hello@example.com",
    to: "dibyendudas907@gmail.com",
    subject: "Alert: multiple failed request rate iis high",
    text: `This Ip ${clientIp} has exceedded the fauiledrequest threshold`,
  };
  try {
    console.log("mailoptions", mailOptions);
    const info = await transporter.sendMail(mailOptions);
    console.log("email sent:", info);
  } catch (err) {
    console.error("error sending mail       :", err);
  }
};

module.exports = sendEmailAlert;
