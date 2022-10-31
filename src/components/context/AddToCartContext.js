import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const setLocalCartData = () => {
    localStorage.setItem("item", JSON.stringify(cart));
  };
  useEffect(() => {
    //console.log(cart);
    const getCartData = JSON.parse(localStorage.getItem("item"));
    //console.log(getCartData);
    setCart(getCartData);
  }, []);

  useEffect(() => {
    setLocalCartData();
  }, [cart]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
