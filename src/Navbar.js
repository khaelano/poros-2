import React from "react";
import logo from "./logo.svg";
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <img src={logo} className="navbar-logo" alt="logo" />
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
