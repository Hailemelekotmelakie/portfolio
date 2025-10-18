import React, { useState, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { IconMessageCircle2Filled, IconPhoneFilled } from "@tabler/icons-react";
import SuccessModal from "../../component/modal/successModal/successModal";
import FailureModal from "../../component/modal/failureModal/failureModal";

const Contact = () => {
  const form = useRef();
  const [type, setType] = useState(null);
  const [body, setBody] = useState(null);
  const [header, setHeader] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.user_name.value === "") {
      setType(false);
      setHeader("Failed");
      setBody("Name mustn't be empty");
      seTimouter();
    } else if (form.current.user_email.value === "") {
      setType(false);
      setHeader("Failed");
      setBody("Email mustn't be empty");
      seTimouter();
    } else if (form.current.message.value === "") {
      setType(false);
      setHeader("Failed");
      setBody("Message mustn't be empty");
      seTimouter();
    } else {
      setLoading(true);
      emailjs
        .sendForm(
          "service_3bq6lo9",
          "template_l19u5d4",
          form.current,
          "yYb__3U7NmQCVqgW1"
        )
        .then(
          (result) => {
            setType(true);
            setHeader("Success Message");
            setBody("I will contact shortly");
            seTimouter();
          },
          (error) => {
            setType(false);
            setHeader("Failed");
            setBody("Something went wrong! Try again.");
            seTimouter();
          }
        )
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const seTimouter = useCallback(() => {
    setTimeout(() => {
      setType(null);
      setHeader(null);
      setBody(null);
    }, 3000);
  }, []);

  return (
    <div className="contactContainer">
      {type === false && <FailureModal header={header} body={body} />}
      {type === true && <SuccessModal header={header} body={body} />}
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
      <form id="contact" className="c-right" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="c-text"
          name="user_name"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="user_email"
          className="c-text"
          placeholder="Your email address"
        />
        <textarea
          className="c-text"
          name="message"
          rows={4}
          placeholder="The form is temporarly not working 😊"
        />
        <p>This form is currently not working 😊</p>
        <input
          type="submit"
          value={loading ? "Sending ..." : "Send"}
          className="componentButton"
        />
      </form>
    </div>
  );
};
export default Contact;
