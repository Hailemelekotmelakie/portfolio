import React, { useEffect, useState } from "react";
import "./ScrollProgress.css";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const scrollProgress = (scrollY / totalHeight) * 100;
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="circle">
        <svg className="progress-ring" width="160" height="160">
          {/* Background Circle */}
          <circle
            className="progress-ring__background"
            stroke="#eee"
            strokeWidth="5"
            fill="transparent"
            r="70"
            cx="80"
            cy="80"
          />

          {/* Progress Circle */}
          <circle
            className="progress-ring__progress"
            stroke="url(#gradient)"
            strokeWidth="5"
            fill="transparent"
            r="70"
            cx="80"
            cy="80"
            style={{
              strokeDasharray: 2 * Math.PI * 70,
              strokeDashoffset: 2 * Math.PI * 70 * (1 - progress / 100),
              transition: "stroke-dashoffset 0.2s linear",
            }}
          />
 
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00f260" />
              <stop offset="100%" stopColor="#0575E6" />
            </linearGradient>
 
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ScrollProgress;
