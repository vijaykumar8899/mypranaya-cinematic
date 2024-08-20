import React from "react";
import "../assets/Styles/Pages/AboutUs.css";
import NavBar from "../Components/Common/Navbar";




function AboutUs() { 
  return (
    <React.Fragment>
      <NavBar />
      <div className="aboutus-container">
      <h1 className="aboutus-title">About Us</h1>
      <p className="aboutus-description">
        Welcome to MyPranaya Cinematic World! We are dedicated to bringing you the finest cinematic experiences, ranging from classic masterpieces to the latest blockbusters. Our mission is to create a community of movie lovers who appreciate the art of filmmaking.
      </p>
      <button className="aboutus-button">Learn More</button>
    </div>
      
    </React.Fragment>
  );
};




export default AboutUs;
