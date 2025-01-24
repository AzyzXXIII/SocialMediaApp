import React from "react";
import "./style.css";
import BoyPng from "../NavBar/boy.png";

export const UsernameCard = () => {
  return (
    <div className="username-card">
      <div className="usernameCard-image">
        <img src={BoyPng} alt="user" className="user-image" />
      </div>

      <div className="usernameCard-info">
        <h3 className="username">Sarrour Hcini</h3>
        <span className="user-handle">@sarrourhcini</span>
      </div>
    </div>
  );
};

export default UsernameCard;
