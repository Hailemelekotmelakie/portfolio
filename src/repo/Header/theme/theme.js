import React, { useState, useRef, useEffect, useContext } from "react";
import "./dropdownBox.css";
import { IconMoon, IconSun } from "@tabler/icons-react";
import ThemeContext from "../../context/themeContext";

const DropdownBox = () => {
  const themeOptions = ["light", "green", "dark"];
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isOpenRef = useRef(isOpen);

  const { theme, setTheme } = useContext(ThemeContext);

  const root = document.querySelector(":root");

  //Night mode on app opens
  useEffect(() => {
    // set by default to light
    if (localStorage.getItem("theme") == undefined) {
      localStorage.setItem("theme", "light");
    }
    // if already setted before
    if (localStorage.getItem("theme") == "dark") {
      removeAllThemeClass();
      root.classList.add("dark");
      setTheme("dark");
    } else if (localStorage.getItem("theme") == "green") {
      removeAllThemeClass();
      root.classList.add("green");
      setTheme("green");
    } else {
      removeAllThemeClass();
      root.classList.add("light");
      setTheme("light");
    }
  }, [theme]);

  const removeAllThemeClass = () => {
    themeOptions.map((th) => {
      root.classList.remove(th);
    });
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      isOpenRef.current = false;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleOptionClick = (option) => {
    //   remove selected theme
    removeAllThemeClass();
    //   add selected theme
    localStorage.setItem("theme", option);
    root.classList.add(option);
    setTheme(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-box" ref={dropdownRef}>
      <div className="dropdown-box__header" onClick={() => setIsOpen(!isOpen)}>
        <span>{theme || "Select"}</span>
        {theme == "dark" ? (
          <IconMoon color="transparent" fill="var(--primary-color)" size={17} />
        ) : (
          <IconSun color="var(--primary-color)" size={17} />
        )}
      </div>
      {isOpen && (
        <div className="dropdown-box__options">
          {themeOptions.map((option) => (
            <div
              key={option}
              className="dropdown-box__option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownBox;
