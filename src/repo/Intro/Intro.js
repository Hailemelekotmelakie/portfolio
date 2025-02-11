import React from "react";
import "./Intro.css";
import Button from "../../component/Button/button";
import { SocialIcon } from "react-social-icons";

const Intro = () => {
  return (
    <div id="home" className="introContainer">
      <div className="i-left">
        <div className="i-name">
          <span className="s-name">I'M HAILEMELEKOT MELAKIE</span>
          <span className="s-description">
            I am a fullstack web developer, with two years of experience.
          </span>
          <a href="#contact" style={{ alignSelf: "center" }}>
            <Button>Work with me</Button>
          </a>
          <div className="i-blur1"></div>
        </div>
        <div className="iconsContainer">
          <SocialIcon
            className="icons"
            network="linkedin"
            bgColor="transparent"
            url="https://www.linkedin.com/in/hailemelekot12/"
            target="__blank"
            fgColor="var(--black-color2)"
          />

          <SocialIcon
            className="icons"
            bgColor="transparent"
            fgColor="var(--black-color2)"
            network="github"
            target="__blank"
            url="https://github.com/Hailemelekotmelakie"
          />
          <SocialIcon
            className="icons"
            network="email"
            fgColor="var(--black-color2)"
            target="__blank"
            url="mailto:Hailemelekotmelakie1991@gmail.com"
            bgColor="transparent"
          />
        </div>
      </div>
      <div className="i-right">
        <img
          className="imageFromGondar"
          src={"/images/onna edit.jpg"}
          alt="MinePhoto"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};
export default Intro;
