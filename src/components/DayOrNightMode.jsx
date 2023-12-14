import React, { useState } from "react";
import day from "../assets/day.png";
import night from "../assets/night.png";

const DayOrNightMode = () => {
  const [nightMode, setNightMode] = useState(false);
  // nightMode ? "./day-mode.css" = false : "./night-mode.css" = false
  const toggleNightMode = () => {
    setNightMode(!nightMode);
    document.body.classList.toggle("night-mode");
  };
  return (
    <>
      <img
        src={nightMode ? night : day}
        alt={nightMode ? "Night Mode" : "Day Mode"}
        width={40}
        height={40}
        onClick={toggleNightMode}
        style={{
          cursor: "pointer",
          marginRight: "5px",
          padding: "10px",
        }}
      />
    </>
  );
};

export default DayOrNightMode;
