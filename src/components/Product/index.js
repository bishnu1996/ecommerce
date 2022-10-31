import React from "react";
import { NavLink } from "react-router-dom";
//import logo from '../../static/image/logo2.png';
import "./style.css";
const Product = ({ products }) => {
  return (
    <NavLink to={`/products/${products.id}`} className="Link-product">
      <div className="product-container">
        <div className="product-image">
          <img src={products.image} alt="" className="image-product" />
        </div>
        <div>
          <p>{products.title.slice(0, 40)}....</p>
          <div className="product-info">
            <NavLink to={`/products/${products.id}`}>
              <button className="add-to-card">Buy now</button>
            </NavLink>
            <p>
              {" "}
              <strong> ₹ {products.price}</strong>
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
