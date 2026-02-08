require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const PORT = 3500;

app.set("view engine", "ejs");
app.set("views", path.join("views"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const client = SibApiV3Sdk.ApiClient.instance;
client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

async function sendContactMail({ name, email, message }) {
    await apiInstance.sendTransacEmail({
      subject: `New Portfolio Message from ${name}`,
      sender: {
        name: "Portfolio Contact",
        email: "vishal.j.khim@gmail.com" // must be verified
      },
      to: [{ email: process.env.ADMIN_EMAIL }],
      replyTo: { email },
      textContent: `
  Name:   <b>${name}</b>
  Email:  ${email}
  
  Message:  <b>${message}</b>
      `
    });
  }

app.listen(PORT,(req,res)=>{
    console.log(`App is At http://localhost:${PORT}`);
});

app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
  
      if (!name || !email || !message) {
        return res.status(400).json({ error: req.body });
      }
  
      await sendContactMail({ name, email, message });
  
      res.redirect("/")
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });