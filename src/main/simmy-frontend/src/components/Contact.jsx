import React from "react";
import "./Contact.css";
import NavbarComponent from "./Navbar";

const Contact = () => {
  return (
    <>
    <NavbarComponent />
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <p className="contact-message">We'd love to hear from you!</p>
      <div className="contact-details">
        <p className="contact-item">
          <strong>Email:</strong> <a href="mailto:hello@simmy.com">hello@simmy.com</a>
        </p>
        <p className="contact-item">
          <strong>Phone:</strong> 404-777-9087
        </p>
        <p className="contact-item">
          <strong>Address:</strong> Peach Tree Street No.34, Atlanta, Georgia, USA
        </p>
      </div>
    </div></>
  );
};

export default Contact;