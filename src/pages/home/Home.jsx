import React from "react";
import './Home.css'
import Navbar from "../component/navbar/Navbar";


const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="product-card">
        <img
          className="product-image"
          src="product-image.jpg"
          alt="Product Image"
        />
        <h2 className="product-name">Product Name</h2>
        <p className="product-description">
          This is a short description of the product.
        </p>
      </div>
    </>
  );
};

export default Home;
