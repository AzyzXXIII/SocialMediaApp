import React from "react";

const Register = () => {
  return (
    <div className="register">
      <div className="register-cover"></div>
      <div className="register-content">
        <h1>DARK SPACE</h1>
        <p>social Media Application</p>
        <div>
          <from>
            <div>
              <label>FirstName</label>
              <input type="text" name="firstName" required />
            </div>
            <div>
              <label>lastName</label>
              <input type="text" name="lastName" required />
            </div>
            <div>
              <label>Email</label>
              <input type="text" name="email" required />
            </div>
            <div>
              <label>¨Password</label>
              <input type="password" required />
            </div>
            <div>
              <label>Bio</label>
              <textarea rows="2" required />
            </div>
            <div>
              <label>Picture</label>
              <input type="file" />
            </div>
            <div>
              <label>BirthDate</label>
              <input type="date" />
            </div>
          </from>
        </div>
      </div>
    </div>
  );
};

export default Register;
