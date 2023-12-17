import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.log("The product has already been added");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdate);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalQuantity = cart.reduce((n, { quantity }) => n + quantity, 0);

  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        total,
        addItem,
        removeItem,
        clearCart,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
