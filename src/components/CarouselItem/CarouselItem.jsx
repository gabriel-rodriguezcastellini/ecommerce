import React from "react";
import { MDBCarouselItem, MDBCarouselCaption } from "mdb-react-ui-kit";

const CarouselItem = ({ item, index }) => {
  return (
    <MDBCarouselItem itemId={index + 1}>
      <img src={item.img} className="d-block w-100 h-25" alt={item.name} />
    </MDBCarouselItem>
  );
};

export default CarouselItem;
