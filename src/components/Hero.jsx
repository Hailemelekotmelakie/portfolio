import useTypewriter from "../hooks/useTypewriter";
import { profile, roles } from "../data.jsx";
import Radar from "./Radar";
import { IconMapPin, IconMessage2, IconPhoneCall } from "@tabler/icons-react";

export default function Hero() {
  const typedRole = useTypewriter(roles);

  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span className="dot"></span>
              {profile.status}
            </div>
            <p style={{ fontFamily: "inherit", fontSize: "40px" }}>
              Hailemelekot Melakie
            </p>
            <div className="role-line" id="typewriter">
              {typedRole}
              <span className="cursor2"></span>
            </div>
            <p className="lede">{profile.lede}</p>
            <div className="hero-meta">
              <span>
                <IconMapPin size={19} /> {profile.location}
              </span>
              <span>
                <IconMessage2 size={19} /> {profile.email}
              </span>
              <span>
                <IconPhoneCall size={19} /> {profile.phone}
              </span>
            </div>
            <div className="btn-row">
              <a href="#projects" className="btn btn-primary">
                View Projects →
              </a>
              <a href="#contact" className="btn btn-ghost">
                Get in Touch
              </a>
            </div>
          </div>

          <Radar />
        </div>
      </div>
    </header>
  );
}
