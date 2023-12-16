import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategoryId } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import {
  MDBContainer,
  MDBRow,
  MDBCarousel,
  MDBSpinner,
} from "mdb-react-ui-kit";
import CarouselItem from "../CarouselItem/CarouselItem";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategoryId : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);

  return (
    <MDBContainer className="mb-5">
      <MDBRow className="mb-5">
        <h1 className="display-5 fw-bold text-center my-3">{greeting}</h1>
        {products.length > 0 ? (
          !categoryId ? (
            <MDBCarousel showControls showIndicators dark fade interval={3000}>
              {products
                .filter((product) => product.featured)
                .map((prod, index) => (
                  <CarouselItem key={prod.id} item={prod} index={index} />
                ))}
            </MDBCarousel>
          ) : (
            ""
          )
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
