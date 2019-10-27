import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="brand">
        <a className="navbar-brand" href="https://www.starwars.com/">
          <img src="/Star_Wars_logo.ico" alt="Star_Wars_logo" />
        </a>
      </div>
      <nav className="nav nav-pills flex-column flex-sm-row">
        {/* <a className="a.navbar-brand" href="#">
          Active
        </a> */}
        <a className="flex-sm-fill text-sm-center nav-link active" href="#">
          Active
        </a>
        <a className="flex-sm-fill text-sm-center nav-link" href="#">
          Longer nav link
        </a>
        <a className="flex-sm-fill text-sm-center nav-link" href="#">
          Link
        </a>
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
