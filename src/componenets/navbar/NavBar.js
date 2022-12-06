import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="navBar-container">
        <ul className="extraButtons">
          <li className="button1"></li>
          <li className="button2"></li>
          <li className="button3"></li>
        </ul>
        <div className="navbar">
          <Link to={{ pathname: "/Bio" }}>About Me</Link>
          <Link to={{ pathname: "/MyShtuff" }}>My Shtuff</Link>
          <Link to={{ pathname: "/Contact" }}>Contact Me</Link>
        </div>
      </div>
    </>
  );
}
export default NavBar;
