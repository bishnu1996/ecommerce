import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/AddToCartContext";
import { AppContext } from "../context/productContext";
import { removeCartItem } from "../services/storage";
import "./style.css";
const CartProduct = () => {
  let totalAmount = 0;

  const [cartData, setCartData] = useState([]);
  const products = useContext(AppContext);
  const { cart, setCart } = useContext(CartContext);
  const cartObj = Object.keys(cart);

  const getCartData = () => {
    const cartspro = products.filter((item) => {
      return cartObj.includes(item.id + "");
    });
    setCartData(cartspro);
  };
  useEffect(() => {
    getCartData();
  }, []);
  useEffect(() => {
    getCartData();
  }, [products, cart]);

  const cartItemDecrease = (product_id) => {
    if (cart[product_id] > 1) {
      const _cart = { ...cart };
      if (product_id in _cart) {
        _cart[product_id] -= 1;
      } else {
        _cart[product_id] = 1;
      }
      if (!_cart.totalItem) {
        _cart.totalItem = 1;
      } else {
        _cart.totalItem -= 1;
      }
      setCart(_cart);
    }
  };
  const cartItemIncrease = (product_id) => {
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
  };

  const totalPrize = (id, price) => {
    let total = id * price;
    totalAmount += total;
    return total;
  };
  const removeProduct = (id) => {
    const _cart = { ...cart };
    const num = _cart[id];
    delete _cart[id];
    _cart.totalItem -= num;
    setCart(_cart);
  };
  return (
    <div className="cart-product-container">
      <table border="1">
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>No of Product</th>
          <th>Total Price</th>
        </tr>
        {cartData.map((item) => {
          return (
            <tr>
              <td>
                <img src={item.image} className="cartitem-img" />
              </td>
              <td>
                <h5 key={item.id}>{item.title} </h5>
              </td>
              <td>
                <p>{item.price}</p>
              </td>
              <td>
                <div className="product-count-button">
                  <button onClick={() => cartItemDecrease(item.id)}>-</button>

                  <span>{cart[item.id]}</span>

                  <button onClick={() => cartItemIncrease(item.id)}>+</button>
                </div>
              </td>

              <td>
                <p>{totalPrize(cart[item.id], item.price)}</p>
              </td>
              <td>
                <i
                  className="fa fa-trash"
                  onClick={() => removeProduct(item.id)}
                ></i>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="total-amount">
        <strong>Total Amount</strong>
        <strong>{totalAmount}</strong>
      </div>
      <div className="order-placed-div">
        <button className="order-placed-btn">Order Placed</button>
      </div>
    </div>
  );
};

export default CartProduct;
