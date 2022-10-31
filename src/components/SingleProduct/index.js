import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/productContext";
import axios from "axios";
import "./style.css";
import Stars from "../Stars";
import { CartContext } from "../context/AddToCartContext";
import { toastSuccess } from "../services/toastify";
const URL = `https://fakestoreapi.com/products`;

const SingleProduct = () => {
  const [singleItem, setSingleItem] = useState({});
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  const products = useContext(AppContext);

  const { cart, setCart } = useContext(CartContext);
  //console.log(name);
  const getSingleData = (URL) => {
    setLoad(false);
    axios.get(URL).then((res) => setSingleItem(res.data));
  };
  useEffect(() => {
    getSingleData(`${URL}/${id}`);
  }, []);
  if (!!load) {
    return <div>Loading...</div>;
  }

  const addToCart = (product_id) => {
    const _cart = { ...cart };
    if (product_id in _cart) {
      _cart[product_id] += 1;
    } else {
      _cart[product_id] = 1;
    }
    if (!_cart.totalItem) {
      _cart.totalItem = 1;
    } else {
      _cart.totalItem += 1;
    }
    setCart(_cart);
    toastSuccess("add suceessfully");
  };
  return (
    <div className="singleProduct-container">
      <div className="singleProduct-image">
        <img src={singleItem.image} alt="product" className="single-img" />
      </div>
      <div className="product-info-single">
        <h3>{singleItem.title}</h3>
        <Stars
          stars={singleItem.rating ? singleItem.rating["rate"] : ""}
          reviews={singleItem.rating ? singleItem.rating["count"] : ""}
        />
        <del className="danger">
          <strong>MRP</strong> :&ensp; {singleItem.price * 2}
        </del>
        <p className="success">
          <strong>Offer</strong>: &ensp;
          {((singleItem.price * 2 - singleItem.price) * 100) / singleItem.price}
          %
        </p>
        <p className="blue">
          <strong> Price</strong>: &ensp; ₹{singleItem.price}
        </p>
        <p className="description-single">{singleItem.description}</p>
        <p>{singleItem.category}</p>
        <div className="button-buy-cart">
          <div>
            <button className="add-to-card" onClick={() => addToCart(id)}>
              Add To Cart
            </button>
          </div>
          <div>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
