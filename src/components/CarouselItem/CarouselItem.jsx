import React from "react";
import { MDBCarouselItem } from "mdb-react-ui-kit";

const CarouselItem = ({ item, index }) => {
  return (
    <MDBCarouselItem itemId={index + 1} className={index === 0 ? "active" : ""}>
      <img
        src={item.img}
        className="d-block w-25 h-25 mx-auto"
        alt={item.name}
      />
    </MDBCarouselItem>
  );
};

export default CarouselItem;
