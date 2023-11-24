import React from "react";

const CartWidget = () => {
  const itemsInCart = 5;

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-notification">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;
