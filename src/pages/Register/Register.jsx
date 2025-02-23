import React from "react";
import "./Register.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Register() {
  return (
    <>
      <NavBar />
      <div className="register-container">
        <h1 className="register-title">Register</h1>

        {/* Name Input */}
        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        {/* Phone Number */}
        <div className="input-group">
          <label>Phone</label>
          <input type="text" placeholder="Enter phone number" />
        </div>

        {/* Email */}
        <div className="input-group">
          <label>Email</label>
          <input type="text" placeholder="Enter your email" />
        </div>

        {/* Password */}
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="************" />
        </div>

        {/* Submit Button */}
        <button className="Register-btn">Register</button>

        {/* Already have an account? */}
        <p className="login-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>

     

      <Footer />
    </>
  );
}

export default Register;
