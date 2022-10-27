import React, { useState } from "react";
// import Email from "../Email";
import "./Contact.css";

function Contact() {
  //   let [senderName, setSenderName] = useState();

  return (
    <div className="row userInput">
      <div className="col nameInput">
        <input
          type="text"
          className="form-control fullName"
          placeholder="Full name"
        ></input>
      </div>
      <div className="col emailInput">
        <input
          type="text"
          className="form-control email"
          placeholder="Email"
        ></input>
      </div>
      <div className="input-group">
        <span className="input-group-text">Type Your Message Here</span>
        <textarea className="form-control"></textarea>
      </div>
    </div>
  );
}
export default Contact;
