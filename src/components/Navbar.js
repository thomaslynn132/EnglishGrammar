import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { day, night } from "../assets";
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { Link } from "react-router-dom";
import "../App.css";
const NavBar = () => {
  const [nightMode, setNightMode] = useState(false);
  const toggleNightMode = () => {
    setNightMode(!nightMode);
    document.body.classList.toggle("night-mode");
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "small",
      textDecoration: isActive ? "none" : "underline",
      backgroundColor: isActive ? "black" : "#333",
      padding: "8px",
      marginLeft: "10px",
      color: "white",
      border: "double",
      fontSize: "large",
      borderRadius: "8%",
    };
  };

  return (
    <>
      <nav
        className="NavBar"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <div>
          <Link to="/">
            <img
              src={nightMode ? night : day}
              alt={nightMode ? "Night Mode" : "Day Mode"}
              width={40}
              height={40}
              style={{
                cursor: "pointer",
                marginRight: "5px",
              }}
            />
          </Link>
          <NavLink style={navLinkStyles} link="./Notes" to="/Notes" exact>
            Notes
          </NavLink>
          <NavLink
            style={navLinkStyles}
            link="./Exercises"
            to="/exercises"
            exact>
            Exercises
          </NavLink>
        </div>
        <div style={{ marginRight: "15px" }}>
          {nightMode ? (
            <IoMdMoon
              size={40}
              color="white"
              onClick={toggleNightMode}
              className="spin"
            />
          ) : (
            <IoSunny size={40} onClick={toggleNightMode} className="spin" />
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
