import "./SideBar.css";
import { GoMarkGithub } from "react-icons/go";
import { GoBroadcast } from "react-icons/go";
import React, { useState } from "react";
function SideBar() {
  const [phoneNumber, setShowPhoneNumber] = useState(false);

  return (
    <div className="sideBarContainer">
      <a
        title="GitHub Profile"
        target="_blank"
        href="https://github.com/madrodgerflynn"
        className="iconAnchor"
      >
        <GoMarkGithub className="sideBarIcon" />
      </a>
      <a
        // need to add onClick event here

        title="Phone Number"
        onClick={setShowPhoneNumber}
        className="iconAnchor"
      >
        <GoBroadcast className="sideBarIcon" />
      </a>
      {/* <i className={GoMarkGithub}></i>
      <i className={GoBroadcast}></i>
      <i className=""></i> */}
    </div>
  );
}
export default SideBar;
