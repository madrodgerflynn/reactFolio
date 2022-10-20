import React from "react";
import "./Bio.css";

export default function Bio() {
  return (
    <div className="body">
      <h1>My Bio</h1>
      <div className="bioDescription">
        <div className="row1">
          <p>
            Welcome! My name is Tyler Anderson and this is a little about me.
          </p>
        </div>
        <p>
          I have always had an interest in all things computer related but got
          distracted by another subject when I was in college, and graduated
          with a BS in Anthropology instead. I have always held a secret desire
          to code and finally took the plunge, and completed the DU Coding
          Bootcamp.
        </p>
      </div>
    </div>
  );
}
