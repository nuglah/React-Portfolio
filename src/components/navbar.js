import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="topnav">
      <div className="topnav-left">
        <h1 className="devname">Ryan Green</h1>
      </div>
      <div className="topnav-right">
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/resume"
        >
          Resume
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
