import React, { useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      bio,
      picture,
      birthDate,
    };
    console.log(user);
  };

  return (
    <div className="register">
      <div className="register-cover"></div>
      <div className="register-content">
        <h1>DARK SPACE</h1>
        <p>social Media Application</p>
        <div>
          <form onSubmit={submit}>
            <div className="form-group">
              <label>FirstName</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>lastName</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>¨Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                rows="2"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Picture</label>
              <input type="file" />
            </div>
            <div className="form-group">
              <label>BirthDate</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <button className="btn-form" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
