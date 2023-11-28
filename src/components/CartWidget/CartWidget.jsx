import React from "react";
import { useCartContext } from "../CartContext/CartContext";

const CartWidget = () => {
  const { cartList } = useCartContext();

  const itemsQty = cartList.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      {itemsQty > 0 && (
        <div>
          <p>{itemsQty} items in cart</p>
          {/* Aquí colocarías tu icono o lo que quieras mostrar como widget */}
        </div>
      )}
    </div>
  );
};

export default CartWidget;
