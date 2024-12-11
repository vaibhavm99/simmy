import React from "react";
import "./Pricing.css";
import NavbarComponent from "./Navbar";

const Pricing = () => {
  return (
    <>
      <NavbarComponent />
      <div className="pricing-container">
        <h1 className="pricing-heading">Pricing</h1>
        <p className="pricing-message">Coming Soon!</p>
      </div>
    </>
  );
};

export default Pricing;