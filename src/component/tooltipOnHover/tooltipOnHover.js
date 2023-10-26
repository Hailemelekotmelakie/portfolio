import React, { useState } from "react";
import "./tooltipOnHover.css";
import OutsideAlerter from "../clickOutside/clickOutside";

const TooltipOnHover = (props) => {
  let timeout;
  const [active, setInvisible] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setInvisible(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setInvisible(false);
  };

  return (
    <OutsideAlerter setInvisible={setInvisible}>
      <div
        className="Tooltip-Wrapper"
        // When to show the tooltip
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
      >
        {/* Wrapping */}
        {props.children}
        {active && (
          <p className={`Tooltip-Tip ${props.direction || "bottom"}`}>
            {/* Content */}
            {props.content}
          </p>
        )}
      </div>
    </OutsideAlerter>
  );
};

export default TooltipOnHover;
