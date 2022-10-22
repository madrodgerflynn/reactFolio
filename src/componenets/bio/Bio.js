import React from "react";
import "./Bio.css";
import TypeIt from "typeit-react";

export default function Bio() {
  // new TypeIt("#bioText", {
  //   strings: [
  //     "My name is Tyler Anderson and have always had an interest in all things computer related.",
  //     " I attempted to study computer science once I was in college, but got distracted by another subject, and graduated with a BS in Anthropology.",
  //     "I then attended a technical university and received an associates in Electrical Engineering.",
  //     "Again I was given the chance to code and really enjoyed it.",
  //     "It wasn't until many years and a couple jobs later that I again was given an oppourtunity to code.",
  //     "I jumped into it head on with the DU Cooding Bootcamp, and haven't looked back",
  //   ],
  //   speed: 50,
  //   lifeLike: true,
  //   startDelay: 0,
  //   cursorChar: "|",
  // }).go();
  return (
    <div className="body">
      <h1>Welcome to my portfolio!</h1>

      <div className="bioDescription">
        <div className="bioContainer">
          <p id="bioText">
            <TypeIt element={"p"}></TypeIt>
            My name is Tyler Anderson and have always had an interest in all
            things computer related. I attempted to study computer science once
            I was in college, but got distracted by another subject, and
            graduated with a BS in Anthropology. I then attended a technical
            university and received an associates in Electrical Engineering.
            Again I was given the chance to code and really enjoyed it. It
            wasn't until many years and a couple jobs later that I again was
            given an oppourtunity to code. I jumped into it head on with the DU
            Cooding Bootcamp, and haven't looked back
          </p>
        </div>
      </div>
    </div>
  );
}
