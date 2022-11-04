import React from "react";
import "./Bio.css";
import TypeIt from "typeit-react";
import Footer from "../footer/Footer";

export default function Bio() {
  return (
    <div className="stuffContainer">
      <div className="bioContainer">
        <h1>Welcome to my portfolio!</h1>
        <TypeIt
          className="textWindow"
          options={{
            speed: 10,
            waitUntilVisible: true,
          }}
          // element={"p"}
        >
          My name is Tyler Anderson. I have always had an interest in all things
          computer related. I attempted to study computer science once I was in
          college, but got distracted by another subject, and graduated with a
          BS in Anthropology. I then attended a technical university and
          received an associates in Electrical Engineering. Again I was given
          the chance to code and really enjoyed it. It wasn't until many years
          and a couple jobs later that I was given another oppourtunity to code.
          I jumped into it head on with the DU Cooding Bootcamp, and haven't
          looked back
        </TypeIt>
      </div>
      {/* <TypeIt
            getBeforeInit={(instance) => {
              instance
                .pause(500)
                .type("After the bootcamp I have continued to code everyday and enjoyed every minute! Coding is another interactive outlet that allows me to be creative!")
                .break()
                .pause(500)
                .break()
                .pause(1500)
                .type("My "other job is a metalsmith. I design")
                .break()
                .pause(700)
                .type("Want to see it?");
              return instance;
         
          ></TypeIt> */}
      <Footer />
    </div>
  );
}
