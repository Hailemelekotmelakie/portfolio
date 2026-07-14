import Reveal from "./Reveal";
import { profile } from "../data/data.jsx";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="section-head">
          <div className="eyebrow">
            <span className="dot"></span>CONTACT
          </div>
          <h2>Let&apos;s build something</h2>
          <p>
            Open to new opportunities. Reach out through any of the channels
            below.
          </p>
        </Reveal>

        <Reveal className="contact-term">
          <div className="contact-line">
            <span className="cmd">$ contact --email</span>
            <a className="val" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
          <div className="contact-line">
            <span className="cmd">$ contact --phone</span>
            <a className="val" href={`tel:${profile.phoneHref}`}>
              {profile.phone}
            </a>
          </div>
          <div className="contact-line">
            <span className="cmd">$ contact --linkedin</span>
            <a
              className="val"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.linkedinLabel}
            </a>
          </div>
          <div className="contact-line">
            <span className="cmd">$ contact --location</span>
            <span className="val">{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
