import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div bg="dark" variant="dark">
        <div className="me-auto text-center">
          <Link to={{ pathname: "/Bio" }}>Home</Link>
          <Link to={{ pathname: "/MyShtuff" }}>My Shtuff</Link>
          <Link to={{ pathname: "/Contact" }}>Contact Me</Link>
        </div>
      </div>
    </>
  );
}
export default NavBar;
