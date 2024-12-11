import React from "react";
import "./Features.css";
import NavbarComponent from "./Navbar";

const Features = () => {
  return (
    <>
      <NavbarComponent />
      <div className="features-container">
        <h1 className="features-heading">Features</h1>
        <p className="features-message">Coming Soon!</p>
      </div>
    </>
  );
};

export default Features;