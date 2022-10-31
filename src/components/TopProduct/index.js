import React, { useContext } from "react";
import { AppContext } from "../context/productContext";
import Product from "../Product";
import "./style.css";

const TopProduct = () => {
  const products = useContext(AppContext);
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Trending Products</h1>
      </div>
      <div className="topproduct-container">
        {products.map((currElem, index) => {
          if (currElem.rating["rate"] > 4) {
            return <Product products={currElem} key={index} />;
          }
        })}
      </div>
    </>
  );
};

export default TopProduct;
