import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProductById("1")
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <ItemDetail />;
};

export default ItemDetailContainer;
