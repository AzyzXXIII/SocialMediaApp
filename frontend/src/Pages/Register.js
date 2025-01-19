import React, { useState } from "react";
import userService from "../Services/userService";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [picture, setPicture] = useState("");
  const [birthDate, setBirthDate] = useState("");
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      bio: "",
      picture: "",
      birthDate: "",
    };
    let isValid = true;

    if (!firstName.trim()) {
      localErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!lastName.trim()) {
      localErrors.lastName = "Last name is required";
      isValid = false;
    }

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

    if (bio.length > 200) {
      localErrors.bio = "Bio cannot exceed 200 characters";
      isValid = false;
    }

    if (!birthDate) {
      localErrors.birthDate = "Birth date is required";
      isValid = false;
    }

    setErrors(localErrors);
    return isValid;
  };

  const register = async (e) => {
    e.preventDefault();
    console.log("Registering...");

    if (!formValidation()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    const userData = {
      firstName,
      lastName,
      email,
      password,
      bio,
      picture,
      birthDate,
    };

    try {
      const response = await userService.register(userData);
      console.log("========>", response);
      toast.success("Successfully created!");

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setBio("");
      setPicture("");
      setBirthDate("");
      setErrors({});
    } catch (error) {
      console.log(error);
      toast.error("This is an error!");
    }
  };

  return (
    <div className="register">
      <Toaster />
      <div className="register-cover"></div>
      <div className="register-content">
        <h1>DARK SPACE</h1>
        <p>social Media Application</p>
        <div>
          <form onSubmit={register}>
            <div className="form-group">
              <label>FirstName</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && <span>{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <label>lastName</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && <span>{errors.lastName}</span>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>¨Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                rows="2"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              {errors.bio && <span>{errors.bio}</span>}
            </div>
            <div className="form-group">
              <label>Picture</label>
              <input
                type="file"
                onChange={(e) => setPicture(e.target.files[0])}
              />
              {errors.picture && <span>{errors.picture}</span>}
            </div>
            <div className="form-group">
              <label>BirthDate</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
              {errors.birthDate && <span>{errors.birthDate}</span>}
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
