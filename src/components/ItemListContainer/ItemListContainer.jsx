import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import {
  MDBContainer,
  MDBRow,
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

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
        <h1 className="display-5 fw-bold text-center">{greeting}</h1>
        <MDBCarousel showIndicators showControls fade>
          {products.map((prod, index) => (
            <MDBCarouselItem
              key={prod.id}
              itemId={prod.id}
              className={index === 0 ? "active" : ""}
            >
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                // src={prod.img}
                className="d-block w-100 mx-auto"
                alt={prod.name}
              />
            </MDBCarouselItem>
          ))}
        </MDBCarousel>
      </MDBRow>
      <ItemList products={products} />
    </MDBContainer>
  );
};

export default ItemListContainer;
