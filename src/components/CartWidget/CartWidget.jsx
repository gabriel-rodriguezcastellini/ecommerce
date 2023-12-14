import React, { useContext } from "react";
import {
  MDBIcon,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge,
} from "mdb-react-ui-kit";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const context = useContext(CartContext);
  return (
    <MDBNavbarItem>
      <MDBNavbarLink href="#cart">
        <MDBBadge pill color="danger">
          {context.cart.reduce((n, { quantity }) => n + quantity, 0)}
        </MDBBadge>
        <span>
          <MDBIcon fas icon="shopping-cart"></MDBIcon>
        </span>
      </MDBNavbarLink>
    </MDBNavbarItem>
  );
};

export default CartWidget;
