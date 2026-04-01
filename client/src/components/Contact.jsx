import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [status, setStatus] = useState("");

  useGSAP(() => {
    gsap.from(".contact-card", {
      scrollTrigger: {
        trigger: "#getintouch",
        start: "top 75%",
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.3,
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      setStatus("Sending...");
      const res = await fetch("https://vishalkhim.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        form.reset();
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Failed to send message.");
        setTimeout(() => setStatus(""), 3000);
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred.");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section id="getintouch" style={{ margin: 0, position: "relative" }}>
      <div className="container">
        <p className="about-head-p">Let's Connect</p>
        <h1 className="about-head-h1">Get In Touch</h1>
        <p className="mobile-scroll"> View More →</p>
        <div className="contact-container">
          <div className="contact-card info-card">
            <h3>Let's Talk </h3>
            <p>
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat. I'm always excited to discuss new projects and
              creative ideas.
            </p>
            <div className="info-item">
              <span>
                <img src="/gmail.png" alt="Email" />
              </span>
              <p>vishal.j.khim@gmail.com</p>
            </div>

            <div className="info-item">
              <span>📞</span>
              <p>+91 9099089554</p>
            </div>

            <div className="info-item">
              <span>📍</span>
              <p>Nadiad, Gujarat, India</p>
            </div>
          </div>
          <div className="contact-card form-card">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" name="name" required />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
              />
              <textarea
                rows="5"
                placeholder="About Your Project..."
                name="message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
            {status && (
              <p style={{ marginTop: "10px", color: "#4ef0e3" }}>{status}</p>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
