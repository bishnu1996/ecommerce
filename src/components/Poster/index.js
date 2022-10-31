import React from "react";
import "./style.css";
import clothShop from "../../static/image/clothShop.jpg";
import clothShop1 from "../../static/image/clothShop1.jpg";
import { NavLink } from "react-router-dom";
const Poster = () => {
  return (
    <div className="poster-container">
      <div className="poster-text">
        <h1>Fashionhub</h1>
        <NavLink to="/products">
          <button className="poster-buy-button">Buy Now!</button>
        </NavLink>
      </div>
      <div className="poster-image-div">
        <img src={clothShop1} alt="fashionhub" className="poster-image" />
      </div>
    </div>
  );
};

export default Poster;
