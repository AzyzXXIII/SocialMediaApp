import React, { useState, useEffect } from "react";

export const Home = () => {
  const [connUserData, setConnUserData] = useState({});

  const getConnectedUserData = () => {
    setConnUserData(JSON.parse(localStorage.getItem("userData")));
  };

  useEffect(() => {
    getConnectedUserData();
  }, []);
  return (
    <div>
      <h1>
        Heeey {connUserData.firstName + ` ` + connUserData.lastName}, welcome to
        Home page
      </h1>
    </div>
  );
};
