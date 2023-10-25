import React, { useState } from "react";
import "./footer.css";
import scrollToTop from "../../utiles/scrollToTop";
import TooltipOnHover from "../../component/tooltipOnHover/tooltipOnHover";
import {
  IconArrowUp,
  IconMessages,
  IconPhoneIncoming,
} from "@tabler/icons-react";
import { SocialIcon } from "react-social-icons";
import RotatingBorder from "../../component/rotatingBorder/rotatingBorder";

const Footer = () => {
  const [scrolled, setScrolled] = useState(0);

  window.onscroll = function () {
    setScrolled(window.scrollY);
  };

  return (
    <>
      <div className="footerDivider"></div>
      <div className="footerContainer">
        <div className="footerSocialContact">
          <IconPhoneIncoming color="var(--primary-color)" size={19} />
          <a href="tel:+251947053537">+251947053537</a>
        </div>
        <div className="footerSocialContact">
          <IconMessages color="var(--primary-color)" size={19} />
          <a href="mailto:Hailemelekotmelakie1991@gmail.com">
            Hailemelekotmelakie1991@gmail.com
          </a>
        </div>
        <RotatingBorder>
          <div className="iconsContainer iconsContainerPadder ">
            <SocialIcon
              className="icons"
              network="linkedin"
              bgColor="transparent"
              url="www.li.com"
              fgColor="var(--black-color2)"
            />

            <SocialIcon
              className="icons"
              bgColor="transparent"
              fgColor="var(--black-color2)"
              network="github"
              url="www.git.com"
            />
            <SocialIcon
              className="icons"
              network="email"
              fgColor="var(--black-color2)"
              url="www.email.com"
              bgColor="transparent"
            />
          </div>
        </RotatingBorder>
        <p>Made by Hailemelekot</p>
      </div>
      {300 < scrolled && (
        <>
          <div className="backToTop" onClick={scrollToTop}>
            <TooltipOnHover content={"Back to top"} direction="top">
              <IconArrowUp size={20} />
            </TooltipOnHover>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
