// src/components/ContactUs.js
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const ContactUs = () => {
  return (
    <>
    <Header/>
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </div>
        <form className="contact-form">
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
