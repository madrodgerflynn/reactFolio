import "./SideBar.css";
import { GoMarkGithub } from "react-icons/go";
import { GoBroadcast } from "react-icons/go";
import React, { useState } from "react";
function SideBar() {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const onClick = () => setShowPhoneNumber(!showPhoneNumber);

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
      <a>
        <button className="phoneButton" onClick={onClick}>
          {showPhoneNumber ? <Text /> : null}
          <GoBroadcast className="sideBarIcon" />
        </button>
      </a>
      {/* <i className={GoMarkGithub}></i>
      <i className={GoBroadcast}></i>
      <i className=""></i> */}
    </div>
  );
}
const Text = <div>"303.386.5175"</div>;
export default SideBar;
