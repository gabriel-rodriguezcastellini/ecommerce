import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import {
  MDBContainer,
  MDBRow,
  MDBCarousel,
  MDBSpinner,
} from "mdb-react-ui-kit";
import CarouselItem from "../CarouselItem/CarouselItem";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");
    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <MDBContainer className="my-5">
      <MDBRow className="mb-5">
        {products.length > 0 && !loading ? (
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
