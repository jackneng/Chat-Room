import React from "react";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <span class="onlineDot"></span>
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a className="leaveButton" href="/">
        x
      </a>
    </div>
  </div>
);

export default InfoBar;
