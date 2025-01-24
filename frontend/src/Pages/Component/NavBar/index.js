import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./style.css"; // Import the CSS file for styling
import boyPng from "./boy.png";

export const Navbar = () => {
  // Example: Fetch the profile image URL from localStorage or state

  return (
    <div className="navbar">
      {/* Left Section: Logo */}
      <div className="navbar-left">
        <h1 className="navbar-logo navbar-logo-blue">Dark Media</h1>
      </div>

      {/* Right Section: Search, Create Button, and Profile Image */}
      <div className="navbar-right">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." className="search-input" />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Create Button */}
        <button className="create-button">
          <FontAwesomeIcon icon={faPlus} /> Create
        </button>

        {/* Profile Image */}
        <div className="profile-image">
          <img src={boyPng} alt="Profile" className="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
