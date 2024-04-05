import React from "react";
import "./Home.css";
import Navbar from "../component/navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const response = await axios.get(
      "https://660e43116ddfa2943b3635a7.mockapi.io/products"
    );
    setProduct(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <Navbar />
      
        <div className="card-container">
      {product.map((val) => {
        return (
          <div key={val.id} className="product-card">
            <img
              className="product-image"
              src={val.ProductImage}
              alt="Product Image"
            />
            <h2 className="product-name">{product.ProductName}</h2>
            <p className="product-description">
              {val.productDescription}
            </p>
          </div>
        );
      })}
      </div>
    </>
  );
};

export default Home;
