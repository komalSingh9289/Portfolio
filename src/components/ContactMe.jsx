import React, { useRef } from "react";
import Lottie from "lottie-react";
import contact from "../assets/images/contact.json";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin, FaGithub, FaTwitter   } from "react-icons/fa";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5d0q1wq", // Replace with your EmailJS Service ID
        "template_lnuoyed", // Replace with your EmailJS Template ID
        form.current,
        "paLXs4mlWSxQ8ZEU4" // Replace with your EmailJS Public Key/User ID
      )
      .then(
        () => {
          toast.success("Message Sent Successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section>
      <div className="main-content">
        <div className="contact-content">
          <h1 className="title">Contact Me</h1>
          <p>
            Let's connect! Feel free to reach out—I'll reply soon.
            <br />
            <a
              href="https://www.linkedin.com/in/komalsingh9289"
              target="_blank"
              rel="noopener noreferrer"
              className="social-links"
            >
              <FaLinkedin size={30} color="#555" className="links"/>
            </a>
            <a
              href="https://github.com/komalSingh9289/komalSingh9289.git"
              target="_blank"
              rel="noopener noreferrer"
              className="social-links"
            >
              <FaGithub size={30} color="#555" className="links"/>
            </a>
            <a
              href="https://x.com/Komal_2107"
              target="_blank"
              rel="noopener noreferrer"
              className="social-links"
            >
              <FaTwitter size={30} color="#555" className="links"/>
            </a>
          </p>
          <div className="contact-wrapper">
            <Lottie animationData={contact} loop={true} className="girl" />
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                id="name"
                name="from_name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                id="email"
                name="from_email"
                placeholder="Email"
                required
              />
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit" className="btn">
                Send
              </button>
            </form>
          </div>
          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
