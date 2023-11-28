import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {
    const existingItem = cartList.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = cartList.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCartList(updatedCart);
    } else {
      setCartList([...cartList, { ...item, quantity }]);
    }
  };

  const removeItem = (itemId) => {
    const updatedCart = cartList.filter((cartItem) => cartItem.id !== itemId);
    setCartList(updatedCart);
  };

  const clear = () => {
    setCartList([]);
  };

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  return (
    <CartContext.Provider value={{ cartList }}>{children}</CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
