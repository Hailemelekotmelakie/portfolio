import React from "react";
import "./Contact.css";
import SelectOption from "../../component/selectOption/selectOption";
import Button from "../../component/Button/button";
const Contact = () => {
  const Arrays = ["React JS", "Node JS", "Vue JS", "Express JS"];
  return (
    <div id="contactMePlease" className="contact-container">
      <div className="c-left">
        <span className="get-in-touch">Get In Touch</span>
        <span className="contact-us">Contact Us</span>
      </div>
      <div className="c-right">
        <input type="text" className="c-text" placeholder="Your Name"></input>
        <input
          type="email"
          className="c-email"
          placeholder="Your email address"
        ></input>
        <SelectOption Arrays={Arrays} />
        <Button>Send</Button>
      </div>
    </div>
  );
};
export default Contact;
