import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="Navbar">
      <img
        src="../../assets/logo.jpeg" // Adjust the path based on where your image is located
        alt="A decorative visual representing lost and found items"
        className="hero-image"
        loading="lazy"
        onClick={() => console.log("Image clicked")}
      />

      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/lost" className="nav-link">
          Lost
        </Link>
        <Link to="/found" className="nav-link">
          Found
        </Link>
        <Link to="/profile" className="nav-link">
          Profile
        </Link>
        <Link to="/login" className="nav-item login">
          Login
        </Link>
        <Link to="/register" className="nav-item register">
          Register
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
