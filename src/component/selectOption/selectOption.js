import React, { useState, useRef, useEffect } from "react";
import "./selectOption.css";
// import { IconChevronDown } from "@tabler/icons-react";

const SelectOption = (props) => {
  const ArrayOptions = props.Arrays;
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const isOpenRef = useRef(isOpen);

  const [theme, setTheme] = useState();

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
    setTheme(option);
    setIsOpen(false);
  };

  return (
    <div className="optionSelectBox" ref={dropdownRef}>
      <div
        className="optionSelectBox__header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{theme || "Programming Language"} </span>
        {/* <IconChevronDown size={18} /> */}
      </div>
      {isOpen && (
        <div className="optionSelectBox__options">
          {ArrayOptions.map((option) => (
            <div
              key={option}
              style={{
                backgroundColor: theme === option ? "var(--black-color2)" : "",
                color: theme === option ? "var(--black-color3)" : "",
              }}
              className="optionSelectBox__option"
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

export default SelectOption;
