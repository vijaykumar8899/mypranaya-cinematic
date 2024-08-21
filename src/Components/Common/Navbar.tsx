import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/Styles/Components/Home/NavBar.css";

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string>("Product");

  // Define the type of `route` as string
  const handleNavigation = (route: string, label: string) => {
    setActive(label);
    navigate(route);
  };

  return (
    <nav className="navbar">
      <img 
        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724112000&semt=ais_hybrid" 
        className="navbar-logo" 
        onClick={() => handleNavigation("/", "Home")} 
        alt="Logo"
      />
      <div className="navbar-links">
        <button className={active === "Home" ? "active" : ""} onClick={() => handleNavigation("/home", "Home")}>Home</button>
        <button className={active === "About" ? "active" : ""} onClick={() => handleNavigation("/about", "About")}>About</button>
        <button className={active === "Product" ? "active" : ""} onClick={() => handleNavigation("/product", "Product")}>Product</button>
        <button className={active === "Services" ? "active" : ""} onClick={() => handleNavigation("/services", "Services")}>Services</button>
        <button className={active === "Contact" ? "active" : ""} onClick={() => handleNavigation("/contact", "Contact")}>Contact</button>
      </div>
    </nav>
  );
};

export default NavBar;
