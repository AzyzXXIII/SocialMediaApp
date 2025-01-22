import React, { useState } from "react";
import userService from "../Services/userService";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    bio: "",
    birthDate: "",
  });

  const formValidation = () => {
    const localErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      bio: "",
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
      setBirthDate("");
      setErrors({});
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        toast.error(error.response.data.message); // Display backend error message
      } else {
        toast.error("An error occurred. Please try again."); // Fallback error message
      }
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
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                rows="2"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
              {errors.bio && <span className="error">{errors.bio}</span>}
            </div>
            <div className="form-group">
              <label>Birth Date</label>
              <input
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
              {errors.birthDate && (
                <span className="error">{errors.birthDate}</span>
              )}
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
