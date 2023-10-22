import React, { useState } from "react";
import "./footer.css";
import scrollToTop from "../../utiles/scrollToTop";
import TooltipOnHover from "../../component/tooltipOnHover/tooltipOnHover";

const Footer = () => {
  const [scrolled, setScrolled] = useState(0);

  window.onscroll = function () {
    setScrolled(window.scrollY);
  };

  return (
    <div className="footerContainer">
      <div className="footerAbove">
        <h4>Location: Injibara, Ethiopia</h4>
        <h4>
          Phone: <a href="tel:+251947053537">+251 947 053 537</a>
        </h4>
        <h4 href="mailto:hailemelekotmelakie1991@gmail.com">
          Mail: hailemelekotmelakie1991@gmail.com
        </h4>
      </div>
      <div className="footerBelow">
        <h3>I wish to hear from you!!</h3>
      </div>
      {300 < scrolled && (
        <>
          <div className="backToTop" onClick={scrollToTop}>
            <TooltipOnHover content={"Back to top"} direction="top">
              {/* <IconArrowUp size={20} /> */} <p>Top</p>
            </TooltipOnHover>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
