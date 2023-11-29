import React from "react";
import { useCartContext } from "../CartContext/CartContext";

const CartWidget = () => {
  const { cartList } = useCartContext();

  const itemsQty = cartList.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-widget">
      {itemsQty > 0 && (
        <div>
          <span className="cart-icon">🛒</span>
          <span className="items-quantity">{itemsQty}</span>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
