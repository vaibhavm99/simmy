import React from "react";
import "./Blog.css";
import NavbarComponent from "./Navbar";

const Blog = () => {
  return (
    <><NavbarComponent /><div className="blog-container">
          <h1 className="blog-heading">Blog</h1>
          <p className="blog-message">Coming Soon!</p>
      </div></>
  );
};

export default Blog;