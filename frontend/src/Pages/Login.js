import React, { useState } from "react";
import "../Style/Login.css";
import toast, { Toaster } from "react-hot-toast";
import userService from "../Services/userService";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const formValidation = () => {
    const localErrors = {
      email: "",
      password: "",
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

  const signin = async (e) => {
    e.preventDefault();

    if (!formValidation()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await userService.login(userData);
      console.log("========>", response);
      toast.success("Successfully CONNECTED!");

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userData", JSON.stringify(response.data.user));

      navigate("/home");

      // Reset form fields
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log("Error", e);

      // Handle error response
      if (e.response && e.response.status === 404) {
        toast.error(e.response.data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="login-container">
      <Toaster />
      <div className="screen-1">
        <form onSubmit={signin}>
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
            {errors.email && <span className="error">{errors.email}</span>}
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
            </div>
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <button className="login" type="submit">
            Login
          </button>
        </form>
        <div className="footer">
          <span>Signup</span>
          <span>Forgot Password?</span>
        </div>
      </div>
    </div>
  );
};
