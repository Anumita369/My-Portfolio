require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const User = require("./models/user");

const app = express();

app.use(cors());
app.use(express.json());

// ------------------- MONGO CONNECTION -------------------
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("MongoDB connection error:", err));


// ------------------- EMAIL TRANSPORTER -------------------
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// ------------------- POST CONTACT FORM -------------------
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {

    // Save to DB
    const saved = await User.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    // Send email to you
    await transporter.sendMail({
      from: `"Portfolio Message" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Message",
      html: `
        <h3>New Message from Portfolio</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    return res.json({ status: "success", saved });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", error: error.message });
  }
});


// ------------------- SERVER -------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
