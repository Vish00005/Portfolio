require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const PORT = 3500;

app.use(cors());
app.use(express.static(path.join(__dirname, "client/dist")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

async function sendContactMail({ name, email, message }) {
  const response = await apiInstance.sendTransacEmail({
    subject: `New Portfolio Message from ${name}`,
    sender: {
      name: "Portfolio Contact",
      email: "vishal.j.khim@gmail.com", // must be verified
    },
    to: [{ email: process.env.ADMIN_EMAIL }],
    replyTo: { email },
    htmlContent: `
      <h1>New Contact Message</h1>
      <p style = "font-size: 18px;"><b>Name:</b> ${name}</p>
      <p style = "font-size: 18px;"><b>Email:</b> ${email}</p>
      <p style = "font-size: 18px;"><b>Message:</b> ${message}</p>
    `,
  });
  console.log(response);
}

app.listen(PORT, (req, res) => {
  console.log(`App is At http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Api Running....");
});
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: req.body });
    }

    await sendContactMail({ name, email, message });

    res.status(200).json({ success: true, message: "Email Sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
