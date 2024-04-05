import {React,useState} from 'react';
import Navbar from '../component/navbar/Navbar';
import './AddProduct.css';
import axios from 'axios';

const AddProduct = () => {
  //first approach to create and take input THIS HAVENT WORKED UP HERE AND THE CREATE OPERATION HAVENT RUN WELL.
  const[productImage,setProductImage]= useState("")
  const[productName,setProductName]= useState("")
  const[productDescription,setProductDescription]= useState("")


  const createproduct = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://660e43116ddfa2943b3635a7.mockapi.io/products" , {
      // API data bta ko key value : state ko variable 
      productDescription: productDescription,
      productImage : productImage,
      productName : productName,
    })
    console.log(response);
  }

  return (
    <>
      <Navbar/>
      <div className="product-form">
        <form onSubmit={createproduct} >
          <label htmlFor="productImage">Product Image:</label>
          <input type="text" id="productImage" name="productImage" onChange={(e) =>{ setProductImage(e.target.value)}} />

          <label htmlFor="productName">Product Name:</label>
          <input type="text" id="productName" name="productName" onChange={(e) =>{ setProductName(e.target.value)}} />

          <label htmlFor="productDescription">Product Description:</label>
          <textarea id="productDescription" name="productDescription" onChange={(e) =>{ setProductDescription(e.target.value)}}></textarea>

          <input type="submit" value="Add Product/ submit" />
        </form>
      </div>
    </>
  );
}

export default AddProduct;
