import React from "react";
import {
  MDBIcon,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge,
} from "mdb-react-ui-kit";

const CartWidget = () => {
  return (
    <MDBNavbarItem>
      <MDBNavbarLink href="#cart">
        <MDBBadge pill color="danger">
          0
        </MDBBadge>
        <span>
          <MDBIcon fas icon="shopping-cart"></MDBIcon>
        </span>
      </MDBNavbarLink>
    </MDBNavbarItem>
  );
};

export default CartWidget;
