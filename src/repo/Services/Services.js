import React, { useState } from "react";
import "./Services.css";
import Button from "../../component/Button/button";
import RotatingBorder from "../../component/rotatingBorder/rotatingBorder";

const Services = () => {
  const services = [
    "Website Development",
    "Mobile App Development",
    "Website Deployment",
    "Software Development",
  ];
  const [active, setActive] = useState(1);

  setTimeout(() => {
    if (active > services.length - 1) {
      setActive(1);
    } else {
      setActive(active + 1);
    }
  }, 4000);

  return (
    <div id="services" className="services-container">
      <div className="sLeft">
        <div className="my-awsome-services">
          <span className="stroke-text">MY AWOSOME</span>{" "}
          <span className="l-services">SERVICES</span>
        </div>
      </div>
      <RotatingBorder>
        <div className="sRight">
          <div className={active % 2 === 0 ? "sRightDiv" : "sRightDiv1"}>
            {services[active - 1]}
          </div>
        </div>
      </RotatingBorder>

      <div className="cv-resume">
        <Button>Download CV</Button>
        <Button>Download Resume</Button>
      </div>
    </div>
  );
};
export default Services;
