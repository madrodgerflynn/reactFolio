import NavBar from "./componenets/NavBar";
import Bio from "./componenets/bio/Bio";
// import Contact from "./componenets/Contact";
import MyShtuff from "./componenets/myShtuff/MyShtuff";
// import Footer from "./componenets/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/Bio" element={<Bio />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/MyShtuff" element={<MyShtuff />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
