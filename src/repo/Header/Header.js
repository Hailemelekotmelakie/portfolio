import React, { useContext, useEffect } from "react";
import "./header.css";
import ThemeContext from "../../context/themeContext";
import TooltipOnHover from "../../component/tooltipOnHover/tooltipOnHover";

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
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
      <h3 className="headerName">
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
      </h3>
      <div className="headerRight">
        <p>Home</p>
        <p>Sample</p>
        <p>Skills</p>
        <p>Services</p>
        <p
          onClick={() => {
            themeChange();
          }}
        >
          Theme
          <span
            className={`${
              theme === "light" ? "headerThemeBlack" : "headerThemeLight"
            }`}
          ></span>
        </p>
      </div>
    </div>
  );
}
