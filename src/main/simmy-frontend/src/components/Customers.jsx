import React from "react";
import "./Customers.css";
import NavbarComponent from "./Navbar";

const Customers = () => {
  return (
    <><NavbarComponent /><div className="customer-container">
      <h1 className="customer-heading">Customers</h1>
      <p className="customer-message">Coming Soon!</p>
    </div></>
  );
};

export default Customers;