import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Styles/Components/Home/NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">MyPranaya Cinematic World</h2>
      <div className="navbar-links">
        <button onClick={() => navigate("/home")}>Home</button>
        <button onClick={() => navigate("/aboutus")}>About Us</button>
        <button onClick={() => navigate("/careers")}>Careers</button>
        <button onClick={() => navigate("/founderstory")}>FounderStory</button>
        <button onClick={() => navigate("/magzine")}>Magzine</button>
        <button onClick={() => navigate("/register")}>Register</button>
      </div>
    </nav>
  );
};

export default NavBar;
