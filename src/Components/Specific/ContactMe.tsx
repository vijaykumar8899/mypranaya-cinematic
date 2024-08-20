import React from "react";
import "../../assets/Styles/Components/Home/ContactMe.css";

const ContactMe = () => {
  return (
    <section className="contact-me">
      <h2>Contact Me</h2>
      <p>If you have any questions or inquiries, feel free to reach out!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactMe;
