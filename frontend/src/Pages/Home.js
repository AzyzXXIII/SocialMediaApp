import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Component/NavBar";
import "../Style/Home.css";
import UsernameCard from "./Component/UsernameCard";

export const Home = () => {
  const [connUserData, setConnUserData] = useState({});
  const navigate = useNavigate();

  const getConnectedUserData = () => {
    setConnUserData(JSON.parse(localStorage.getItem("userData")));
  };

  useEffect(() => {
    getConnectedUserData();
    if (localStorage.getItem("userData") === null) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="home-container">
      <Navbar />

      <div className="home-content">
        <h1>
          Heeey {connUserData.firstName + ` ` + connUserData.lastName}, welcome
          to Home page
        </h1>
        <UsernameCard />
      </div>
    </div>
  );
};
