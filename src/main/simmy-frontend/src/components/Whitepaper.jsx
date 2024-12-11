import React from "react";
import "./Whitepaper.css";
import NavbarComponent from "./Navbar";

const Whitepaper = () => {
  return (
    <><NavbarComponent /><div className="whitepaper-container">
          <h1 className="whitepaper-heading">Whitepaper</h1>
          <p className="whitepaper-message">Coming Soon!</p>
      </div></>
  );
};

export default Whitepaper;