import Button from "../../component/Button/button";
import RotatingBorder from "../../component/rotatingBorder/rotatingBorder";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services-container">
      <div className="sLeft">
        <div className="my-awsome-services">
          <span className="stroke-text">MY AWOSOME</span>{" "}
          <span className="l-services">SERVICES</span>
        </div>
      </div>
      <RotatingBorder />

      <div className="cv-resume">
        <a href="/Resume - Hailemelekot.pdf" download>
          <Button>Download Resume</Button>
        </a>
      </div>
    </div>
  );
};
export default Services;
