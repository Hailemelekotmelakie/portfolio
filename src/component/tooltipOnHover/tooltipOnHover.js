import React, { useState } from "react";
import "./tooltipOnHover.css";

const TooltipOnHover = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {/* Wrapping */}
      {props.children}
      {active && (
        <p className={`Tooltip-Tip ${props.direction || "top"}`}>
          {/* Content */}
          {props.content}
        </p>
      )}
    </div>
  );
};

export default TooltipOnHover;
