import React, { useState, useEffect } from "react";
import "./testimonials.css";
import {
  IconCircleChevronRight,
  IconCircleChevronLeft
} from "@tabler/icons-react";

export default function Testimonials() {
  const [indexed, setIndexed] = useState(0);
  const [activator, setActivator] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setActivator(false);
      console.log("first");
    }, 1000);
  }, [indexed]);

  const testi = [
    {
      name: "Melakamu Fentahun",
      job: "fullstack develper",
      desc: "I am a fullstack web developer since 2019 GC",
      imageUrl: "/images/mine.jpg"
    },
    {
      name: "Mekonen Messay",
      job: "Web developer",
      desc: "Computer Engineer since 2020 GC",
      imageUrl: "/images/DTU Logo.png"
    },
    {
      name: "Markos Natnael",
      job: "Web developer and Lecturer",
      desc: "Lecturer and Engineer in Ethiopia",
      imageUrl: "/images/facebook.png"
    },
    {
      name: "Getnet Adane",
      job: "Computer Engineer",
      desc: "Programmer",
      imageUrl: "/images/DTU Logo.png"
    },
    {
      name: "Asrat Mau",
      job: "Frontend Developer",
      desc: "Frontend developer",
      imageUrl: "/images/coffee-thumbnail.png"
    }
  ];
  return (
    <div id="sample" className="testimonialsContainer">
      <h1>People's Testimonial</h1>
      <div className="testiHigher">
        <div className={activator ? "testis testi1Forward" : "testis"}>
          <img
            src={testi[indexed === 0 ? testi.length - 1 : indexed - 1].imageUrl}
            alt="Images"
            width={"auto"}
            height={"auto"}
            className="testi1Image"
          />
          <p className="testiParagraph">
            {testi[indexed === 0 ? testi.length - 1 : indexed - 1].desc}
          </p>
          <h3 className="testiHeader">
            {testi[indexed === 0 ? testi.length - 1 : indexed - 1].name}
          </h3>
          <h6>{testi[indexed === 0 ? testi.length - 1 : indexed - 1].job}</h6>
        </div>
        <div className={activator ? "testis testi2Forward" : "testis"}>
          <img
            src={testi[indexed].imageUrl}
            alt="Images"
            width={"auto"}
            height={"auto"}
            className="testi1Image"
          />
          <p className="testiParagraph">{testi[indexed].desc}</p>
          <h3 className="testiHeader">{testi[indexed].name}</h3>
          <h6>{testi[indexed].job}</h6>
        </div>
        <div className={activator ? "testis testi3Forward" : "testis"}>
          <img
            src={testi[indexed === testi.length - 1 ? 0 : indexed + 1].imageUrl}
            alt="Images"
            width={"auto"}
            height={"auto"}
            className="testi1Image"
          />
          <p className="testiParagraph">
            {testi[indexed === testi.length - 1 ? 0 : indexed + 1].desc}
          </p>
          <h3 className="testiHeader">
            {testi[indexed === testi.length - 1 ? 0 : indexed + 1].name}
          </h3>
          <h6>{testi[indexed === testi.length - 1 ? 0 : indexed + 1].job}</h6>
        </div>
      </div>
      <div className="testChangerIcons">
        <IconCircleChevronLeft
          onClick={() => {
            if (!activator) {
              indexed === 0
                ? setIndexed(testi.length - 1)
                : setIndexed(indexed - 1);
              setActivator(true);
            }
          }}
          className="testChangerIcon"
        />
        <IconCircleChevronRight
          onClick={() => {
            if (!activator) {
              testi.length - 1 === indexed
                ? setIndexed(0)
                : setIndexed(indexed + 1);
              setActivator(true);
            }
          }}
          className="testChangerIcon"
        />
      </div>
    </div>
  );
}
