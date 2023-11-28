import React from "react";
import { useCartContext } from "../CartContext/CartContext";

const Cart = () => {
  const { cartList, removeItem, clear } = useCartContext();

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  const handleClearCart = () => {
    clear();
  };

  const getTotalPrice = () => {
    return cartList.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div>
      {cartList.length === 0 ? (
        <div>
          <p>No items in cart.</p>
          <button onClick={() => handleClearCart()}>Clear Cart</button>
        </div>
      ) : (
        <div>
          <h2>Shopping Cart</h2>
          {cartList.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price per item: ${item.price}</p>
              <p>Total: ${item.price * item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          ))}
          <p>Total Price: ${getTotalPrice()}</p>
          <button onClick={() => handleClearCart()}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
