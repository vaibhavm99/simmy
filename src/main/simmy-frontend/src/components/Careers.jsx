import React from "react";
import "./Careers.css";
import NavbarComponent from "./Navbar";

const Careers = () => {
    
  return (
    <><NavbarComponent />
    <div className="careers-container">
          <h1 className="careers-heading">Careers</h1>
          <p className="careers-message">Roles opening soon!</p>
      </div></>
  );
};

export default Careers;