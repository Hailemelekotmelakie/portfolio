import React from "react";
import "./rotatingBorder.css";

export default function RotatingBorder({ children }) {
  return <div className="rotationAroundBox">{children}</div>;
}
