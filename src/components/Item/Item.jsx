import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCardFooter,
  MDBCol,
} from "mdb-react-ui-kit";

const Item = ({ id, name, img, price, stock, description }) => {
  return (
    <MDBCol>
      <MDBCard className="h-100">
        <MDBCardImage
          src={img}
          position="top"
          alt={name}
          className="w-25 mx-auto h-100"
        />
        <MDBCardBody className="bg-white">
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardSubTitle className="text-muted">
            Price: ${price}
          </MDBCardSubTitle>
          <MDBCardSubTitle className="text-muted">
            Available stock: {stock}
          </MDBCardSubTitle>
          <MDBCardText>{description}</MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
          <MDBBtn href="#">View detail</MDBBtn>
        </MDBCardFooter>
      </MDBCard>
    </MDBCol>
  );
};

export default Item;
