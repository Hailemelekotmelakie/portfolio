import React from "react";
import "./Intro.css";
import Button from "../../component/Button/button";
import TooltipOnHover from "../../component/tooltipOnHover/tooltipOnHover";

const Intro = () => {
  return (
    <div className="introContainer">
      <div className="i-left">
        <div className="i-name">
          <span className="s-name">I'M HAILEMELEKOT MELAKIE</span>
          <span className="s-description">
            I am a fullstack web developer, with two years of experience.
          </span>
          <TooltipOnHover
            direction="bottom"
            content="Please hang me a call on +251947053537"
          >
            <Button>Work with me</Button>
          </TooltipOnHover>
          <div className="i-blur1"></div>
        </div>
        <div className="iconsContainer">
          <a target="__blank" href="www.linkedin.com">
            <img className="icons" src={"/images/linkedin.png"} alt="icons" />
          </a>
          <a target="__blank" href="www.facebook.com">
            <img className="icons" src={"/images/facebook.png"} alt="icons" />
          </a>
          <a target="__blank" href="www.instagram.com">
            <img className="icons" src={"/images/Instagram.png"} alt="icons" />
          </a>
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
