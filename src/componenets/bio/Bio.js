import React from "react";
import "./Bio.css";
import TypeIt from "typeit-react";

export default function Bio() {
  return (
    <div className="body">
      <div className="bioDescription">
        <div className="bioContainer">
          <h1>Welcome to my portfolio!</h1>
          <TypeIt
            className="textWindow"
            options={{
              speed: 60,
              waitUntilVisible: true,
            }}
            element={"p"}
          >
            My name is Tyler Anderson. I have always had an interest in all
            things computer related. I attempted to study computer science once
            I was in college, but got distracted by another subject, and
            graduated with a BS in Anthropology. I then attended a technical
            university and received an associates in Electrical Engineering.
            Again I was given the chance to code and really enjoyed it. It
            wasn't until many years and a couple jobs later that I was given
            another oppourtunity to code. I jumped into it head on with the DU
            Cooding Bootcamp, and haven't looked back
          </TypeIt>
        </div>
      </div>
    </div>
  );
}
