import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Login.css";

function Login() {
  return (
    <>
      <NavBar />
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <div className="input-group">
          <label>Email:</label>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" placeholder="************" />
        </div>
        <button className="login-btn">Login</button>
        <p className="forgot-password">
          Forgot your password? <a href="/reset">Reset</a>
        </p>
      </div>
  
      <Footer />
    </>
  );
}

export default Login;
