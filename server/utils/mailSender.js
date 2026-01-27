const nodemailer = require("nodemailer");

const mailSender = async (toEmail, subject, htmlBody,replyToEmail = null) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false, 
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Gourav Portfolio" <${process.env.MAIL_USER}>`,
      to: toEmail,
      subject: subject,
      html: htmlBody, ...(replyToEmail && { replyTo: replyToEmail }),
    });

    return info;
  } catch (error) {
    console.log("MAIL SENDER ERROR:", error);
    throw error;
  }
};

module.exports = mailSender;