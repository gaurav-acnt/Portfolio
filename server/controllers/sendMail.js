const mailSender = require("../utils/mailSender");
const Mail = require("../models/sendMail")
exports.sendMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    await Mail.create({name,email,message});

    const htmlBody = `
      <h2>New Contact Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${message}</p>
    `;

    await mailSender(process.env.MAIL_USER, "📩 New Portfolio Contact Message", htmlBody,email);

    return res.status(200).json({
      success: true,
      message: " Message sent successfully!",
    });
  } catch (error) {
    console.log("SEND MAIL ERROR",error.message)
    return res.status(500).json({
      success: false,
      message: error.message || " Email sending failed!",
    });
  }
};