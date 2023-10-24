import React, { useState } from "react";
import "./footer.css";
import scrollToTop from "../../utiles/scrollToTop";
import TooltipOnHover from "../../component/tooltipOnHover/tooltipOnHover";
import { IconArrowUp } from "@tabler/icons-react";

const Footer = () => {
  const [scrolled, setScrolled] = useState(0);

  window.onscroll = function () {
    setScrolled(window.scrollY);
  };

  return (
    <div className="footerContainer">
      <div className="footerAbove"></div>
      <h2 className="haha">Hailemelekot</h2>
      {300 < scrolled && (
        <>
          <div className="backToTop" onClick={scrollToTop}>
            <TooltipOnHover content={"Back to top"} direction="top">
              <IconArrowUp size={20} />
            </TooltipOnHover>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;
