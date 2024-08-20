import React from "react";
import NavBar from "../Components/Common/Navbar";
import Introduction from "../Components/Specific/Introduction";
import ContactMe from "../Components/Specific/ContactMe";
import "../assets/Styles/Pages/Home.css";



function Home() { 
  return (
    <React.Fragment>
      <NavBar />
      <Introduction />
      <ContactMe />
    </React.Fragment>
  );
};


export default Home;
