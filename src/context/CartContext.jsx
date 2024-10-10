import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("saleToken"));
  const [isShow, setIsShow] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  const totalPrice = () => cart.reduce((acc, item) => acc + item.price, 0);

  const values = {
    cart,
    setCart,
    isShow,
    setIsShow,
    token,
    setToken,
    totalPrice,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const getCartContext = () => useContext(CartContext);

export default CartContextProvider;
