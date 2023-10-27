import React from "react";
import "./Contact.css";
import SelectOption from "../../component/selectOption/selectOption";
import Button from "../../component/Button/button";
import { IconMessageCircle2Filled, IconPhoneFilled } from "@tabler/icons-react";
const Contact = () => {
  const Arrays = ["React JS", "Node JS", "Vue JS", "Express JS"];
  return (
    <div className="contactContainer">
      <div className="contactBlur"></div>
      <div className="c-left">
        <span className="contact-us">Contact Us</span>
        <div>
          <a
            className="contactPhone"
            href="mailto:Hailemelekotmelakie1991@gmail.com"
          >
            <IconMessageCircle2Filled size={19} />
            <p>Hailemelekotmelakie1991@gmail.com</p>
          </a>
          <a className="contactPhone" href="tel:+251947053537">
            <IconPhoneFilled size={19} />
            <p>+251 947 053 537</p>
          </a>
        </div>
      </div>
      <div id="contactMePlease" className="c-right">
        <input type="text" className="c-text" placeholder="Your Name" />
        <input
          type="email"
          className="c-text"
          placeholder="Your email address"
        />
        <textarea className="c-text" rows={4} placeholder="Message" />
        <SelectOption Arrays={Arrays} />
        <Button>Send</Button>
      </div>
    </div>
  );
};
export default Contact;
