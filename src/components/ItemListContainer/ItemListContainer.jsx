import React, { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import {
  MDBContainer,
  MDBRow,
  MDBCarousel,
  MDBSpinner,
} from "mdb-react-ui-kit";
import CarouselItem from "../CarouselItem/CarouselItem";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <MDBContainer>
      <MDBRow>
        <h1 className="display-5 fw-bold text-center my-3">{greeting}</h1>
        {/* TODO: change the == 6 to get the real quantity (not fixed) */}
        {products.length == 6 ? (
          <MDBCarousel fade>
            {products.slice(-3).map((prod, index) => (
              <CarouselItem key={prod.id} item={prod} index={index} />
            ))}
          </MDBCarousel>
        ) : (
          <MDBSpinner role="status" className="mx-auto">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        )}
      </MDBRow>
      <ItemList products={products} />
    </MDBContainer>
  );
};

export default ItemListContainer;
