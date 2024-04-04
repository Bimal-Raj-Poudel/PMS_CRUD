import React from "react";
import "./Home.css";
import Navbar from "../component/navbar/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await axios.get(
      "https://660e43116ddfa2943b3635a7.mockapi.io/products"
    );
    setProducts(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(products);

  return (
    <>
      <Navbar />

      {products.map((product) => {
        return (
          <div key={product.id} className="product-card">
            <img
              className="product-image"
              src={product.}
              alt="Product Image"
            />
            <h2 className="product-name">{product.ProductName}</h2>
            <p className="product-description">
              {product.productDescription}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Home;
