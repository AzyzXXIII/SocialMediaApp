import React, { useState } from "react";
import "../Style/Login.css";
import toast, { Toaster } from "react-hot-toast";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bio: "",
    picture: "",
    birthDate: "",
  });

  const formValidation = () => {
    const localErrors = {
      ...errors,
    };
    let isValid = true;

    if (!email.trim()) {
      localErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      localErrors.email = "Invalid email address";
      isValid = false;
    }

    if (!password.trim()) {
      localErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      localErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setErrors(localErrors);
    return isValid;
  };

  return (
    <div className="login-container">
      <Toaster />
      <div className="screen-1">
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <div className="sec-2">
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="email"
              name="email"
              placeholder="Username@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              className="pas"
              type="password"
              name="password"
              placeholder="············"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ion-icon className="show-hide" name="eye-outline"></ion-icon>
          </div>
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button className="login">Login</button>
        <div className="footer">
          <span>Signup</span>
          <span>Forgot Password?</span>
        </div>
      </div>
    </div>
  );
};
