import React, { useContext, useEffect, useState } from "react";
import "./header.css";
import ThemeContext from "../../context/themeContext";
import TooltipOnHover from "../../component/tooltipOnHover/tooltipOnHover";
import { IconMoon, IconSun } from "@tabler/icons-react";

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
  }, [theme, root.classList]);

  const themeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="headerContainer">
      <div className="headerName">
        <TooltipOnHover direction="bottom" content="Please">
          <span>P</span>
        </TooltipOnHover>
        <TooltipOnHover direction="bottom" content="Our">
          <span>O</span>
        </TooltipOnHover>
        <TooltipOnHover direction="bottom" content="Recriuter">
          <span>R</span>
        </TooltipOnHover>
        <TooltipOnHover direction="bottom" content="it is True">
          <span>T</span>
        </TooltipOnHover>
        <TooltipOnHover direction="bottom" content="that I follow">
          <span className="headerNameUnique">F</span>
          <span className="headerNameUnique">O</span>
        </TooltipOnHover>
        <TooltipOnHover direction="bottom" content="rules">
          <span>L</span>
        </TooltipOnHover>
        <TooltipOnHover direction="bottom" content="in development">
          <span>I</span>
        </TooltipOnHover>
        <TooltipOnHover direction="bottom" content="O, Thank you!!">
          <span>O</span>
        </TooltipOnHover>
      </div>
      <div
        className={
          isNavOpen ? "headerRightOn headerRight" : "headerRightOff headerRight"
        }
      >
        <p type="border">Home</p>
        <p type="border">Sample</p>
        <p type="border">Skills</p>
        <p type="border">Services</p>
      </div>
      <div
        className="themeIcon"
        onClick={() => {
          themeChange();
        }}
      >
        {theme === "dark" ? (
          <TooltipOnHover content="Change to light mode">
            <IconMoon
              color="transparent"
              fill="var(--primary-color)"
              size={20}
            />
          </TooltipOnHover>
        ) : (
          <TooltipOnHover content="Change to dark mode">
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
