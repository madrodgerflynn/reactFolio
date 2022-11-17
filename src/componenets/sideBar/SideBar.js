import "./SideBar.css";
import { GoMarkGithub } from "react-icons/go";
import { GoBroadcast } from "react-icons/go";
import React, { useState } from "react";
function SideBar() {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const onClick = () => setShowPhoneNumber(true);

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
      <button title="Phone Number" className="iconAnchor">
        <GoBroadcast className="sideBarIcon" />
      </button>
      {/* <i className={GoMarkGithub}></i>
      <i className={GoBroadcast}></i>
      <i className=""></i> */}
    </div>
  );
}
export default SideBar;
