import React, { useState } from "react";
import "./Services.css";
import Button from "../../component/Button/button";

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
    <div className="services-container">
      <div className="sLeft">
        <div className="my-awsome-services">
          <span className="stroke-text">MY AWOSOME</span>{" "}
          <span className="l-services">SERVICES</span>
        </div>
      </div>
      <div className="gg">
        <div className="sRight">
          <div className={active % 2 === 0 ? "sRightDiv" : "sRightDiv1"}>
            {services[active - 1]}
          </div>
        </div>
      </div>

      <div className="cv-resume">
        <Button>Download CV</Button>
        <Button>Download Resume</Button>
      </div>
    </div>
  );
};
export default Services;
