import React from "react";
import "./Bio.css";
import TypeIt from "typeit-react";
import Footer from "../footer/Footer";

export default function Bio() {
  return (
    <div className="stuffContainer">
      <div className="bioContainer">
        <h1>Welcome to my portfolio!</h1>
        {/* Using TypeIt to create the illusion it is typing itself */}
        <TypeIt
          options={{
            speed: 20,
            lifeLike: true,
          }}
          getBeforeInit={(instance) => {
            instance

              .pause(500)
              .type(
                "My name is Tyler Anderson. I have always had an interest in all things computer related. I attempted to study computer science once I was in college, but got distracted by another subject, and graduated with a BS in Anthropology. I then attended a technical university and received an associates in Electrical Engineering. Again I was given the chance to code and really enjoyed it. It wasn't until many years and a couple jobs later that I was given another oppourtunity to code. I jumped into it head on with the DU Cooding Bootcamp, and haven't looked back"
              )
              .pause(500)
              .break()
              .pause(200)
              .break()
              .type(
                "After the bootcamp I have continued to code everyday and enjoyed every minute! Coding is another interactive outlet that allows me to be creative!"
              )
              .break()
              .pause(500)
              .break()
              .type(
                "My other job is a metalsmith. I design and create jewlery, mainly with scraps I find."
              )
              .break()
              .pause(200)
              .break()
              .type("My Skills");
            return instance;
          }}
        ></TypeIt>
      </div>
      <Footer />
    </div>
  );
}
