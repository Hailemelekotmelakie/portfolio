import React from "react";
import "./Intro.css";
import Button from "../../component/Button/button";
import { SocialIcon } from "react-social-icons";

const Intro = () => {
  return (
    <div className="introContainer">
      <div className="i-left">
        <div className="i-name">
          <span className="s-name">I'M HAILEMELEKOT MELAKIE</span>
          <span className="s-description">
            I am a fullstack web developer, with two years of experience.
          </span>
          <a href="#contactMePlease" style={{ alignSelf: "center" }}>
            <Button>Work with me</Button>
          </a>
          <div className="i-blur1"></div>
        </div>
        <div className="iconsContainer">
          <SocialIcon
            className="icons"
            network="linkedin"
            bgColor="transparent"
            url="www.vimeo.com"
            fgColor="var(--black-color2)"
          />

          <SocialIcon
            className="icons"
            bgColor="transparent"
            fgColor="var(--black-color2)"
            network="github"
            url="www.vimeo.com"
          />
          <SocialIcon
            className="icons"
            network="email"
            fgColor="var(--black-color2)"
            url="www.vimeo.com"
            bgColor="transparent"
          />
        </div>
      </div>
      <div className="i-right">
        <img
          className="imageFromGondar"
          src={"/images/gonna edit.jpg"}
          alt="MinePhoto"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </div>
  );
};
export default Intro;
