import React, { useContext } from "react";
import "./style.css";
import logo from "../../static/image/logo2.png";
import { Link } from "react-router-dom";
import { CartContext } from "../context/AddToCartContext";

const Header = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <nav className="header-container">
      <div className="logo-div">
        <img src={logo} alt="" className="logo" />
      </div>
      <ul className="links">
        <li>
          <Link to="/" className="Link">
            Home
          </Link>
        </li>
        <li>
          <Link to="products" className="Link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart-product" className="Link">
            <div className="cart-item-top">
              <span className="item-length">{cart.totalItem}</span>
              <i
                className="fa fa-cart-plus"
                style={{ fontSize: "36px", color: "#a93d5d" }}
              ></i>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
