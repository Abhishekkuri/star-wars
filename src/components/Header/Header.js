import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="brand">
        <a className="navbar-brand" href="https://www.starwars.com/">
          <img
            src="https://raw.githubusercontent.com/Abhishekkuri/star-wars/master/public/Images/Star_Wars_logo.ico"
            alt="Star_Wars_logo"
          />
        </a>
      </div>
      <nav className="nav nav-pills flex-column flex-sm-row">
        <NavLink className="flex-sm-fill text-sm-center nav-link " exact to="/">
          Home
        </NavLink>
        <NavLink className="flex-sm-fill text-sm-center nav-link " to="/about">
          About
        </NavLink>
        <a
          className="flex-sm-fill text-sm-center nav-link disabled"
          href="#"
          tabIndex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </nav>
    </div>
  );
};

export default Header;
