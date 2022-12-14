import NavBar from "./componenets/navbar/NavBar";
import Bio from "./componenets/bio/Bio";
import Contact from "./componenets/contact/Contact";
import MyShtuff from "./componenets/myShtuff/MyShtuff";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import React, { useState } from "react";

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/reactFolio" element={<Bio />} />
        <Route path="/" element={<Bio />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/MyShtuff" element={<MyShtuff />} />
      </Routes>
    </Router>
  );
}

export default App;
