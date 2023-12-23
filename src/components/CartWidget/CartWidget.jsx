import React, { useContext } from "react";
import {
  MDBIcon,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge,
} from "mdb-react-ui-kit";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <MDBNavbarItem>
      <Link
        to="/cart"
        className="nav-link"
        style={{ display: totalQuantity > 0 ? "block" : "none" }}
      >
        <MDBBadge pill color="danger">
          {totalQuantity}
        </MDBBadge>
        <span>
          <MDBIcon fas icon="shopping-cart"></MDBIcon>
        </span>
      </Link>
    </MDBNavbarItem>
  );
};

export default CartWidget;
