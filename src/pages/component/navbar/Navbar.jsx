import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addproduct">Add Product</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
