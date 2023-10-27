import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import ThemeContext from "../../context/themeContext";
import { IconMoon, IconSun } from "@tabler/icons-react";
import TooltipOnHover from "../../component/tooltipOnHover/tooltipOnHover";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const root = document.querySelector(":root");

  useEffect(() => {
    const preTheme = localStorage.getItem("theme");
    if (preTheme === "light") {
      root.classList.remove("light");
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const themeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleOnLinkClick = () => {
    setIsNavOpen(false);
  };
  return (
    <div className="headerContainer">
      <div className="headerName">
        <span>P</span>
        <span>O</span>
        <span>R</span>
        <span>T</span>
        <span className="headerNameUnique">F</span>
        <span className="headerNameUnique">O</span>
        <span>L</span>
        <span>I</span>
        <span>O</span>
      </div>
      <div
        className={
          isNavOpen ? "headerRightOn headerRight" : "headerRightOff headerRight"
        }
      >
        <a href="#home" type="border" onClick={handleOnLinkClick}>
          Home
        </a>
        <a href="#Sample" type="border" onClick={handleOnLinkClick}>
          Sample
        </a>
        <a href="#contact" type="border" onClick={handleOnLinkClick}>
          contact
        </a>
        <a href="#skills" type="border" onClick={handleOnLinkClick}>
          Skills
        </a>
        <a href="#services" type="border" onClick={handleOnLinkClick}>
          Services
        </a>
      </div>
      <div className="themeIcon" onClick={themeChange}>
        {theme === "dark" ? (
          <TooltipOnHover content="Turn to light">
            <IconMoon
              color="transparent"
              fill="var(--primary-color)"
              size={20}
            />
          </TooltipOnHover>
        ) : (
          <TooltipOnHover content="Turn to dark">
            <IconSun color="var(--primary-color)" size={20} />
          </TooltipOnHover>
        )}
        <span
          className={`${
            theme === "light" ? "headerThemeBlack" : "headerThemeLight"
          }`}
        ></span>
      </div>
      <div
        className={"headerBurgerContainer"}
        onClick={() => {
          setIsNavOpen(!isNavOpen);
        }}
      >
        <div className={isNavOpen ? "headerBurger" : "headerBurger1"}></div>
        <div className={isNavOpen ? "headerBurger" : "headerBurger1"}></div>
        <div className={isNavOpen ? "headerBurger" : "headerBurger1"}></div>
      </div>
    </div>
  );
}
