import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
// import Notes from "./Notes";
//import Exercise from "./Exercise";

const NavBar = () => {
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
    };
  };

  return (
    <nav className="NavBar">
      <NavLink style={navLinkStyles} link="./Notes" to="/Notes" exact>
        Notes
      </NavLink>
      <NavLink style={navLinkStyles} link="./Exercises" to="/exercises" exact>
        Exercises
      </NavLink>
    </nav>
  );
};

export default NavBar;
