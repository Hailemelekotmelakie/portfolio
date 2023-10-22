import React from "react";
import "./Services.css";
import Button from "../../component/Button/button";

const Services = () => {
  return (
    <div className="services-container">
      <div className="sLeft">
        <div className="my-awsome-services">
          <span className="stroke-text">My Awesome</span>{" "}
          <span className="l-services">Services</span>
        </div>
        <div className="cv-resume">
          <Button>Download CV</Button>
          <Button>Download Resume</Button>
        </div>
      </div>
      <div className="sRight">
        <div className="sRightdiv">Web Development</div>
        <div className="sRightdiv">Website Development</div>
        <div className="sRightdiv">Mobile App Development</div>
        <div className="sRightdiv">Website Deployment</div>
        <div className="sRightdiv">Software Development</div>
      </div>
    </div>
  );
};
export default Services;
