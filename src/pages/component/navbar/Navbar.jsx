import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
    <div className="Logo">
      <img src="logo.png" alt="Logo"/>
    </div>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
      
    </>
  );
}

export default Navbar;

