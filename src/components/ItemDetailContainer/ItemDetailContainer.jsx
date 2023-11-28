import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const getItem = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockItem = {
        id: itemId,
        title: `Product ${itemId}`,
        description: `Description for Product ${itemId}`,
        price: 19.99,
        pictureUrl: "https://via.placeholder.com/150",
      };
      resolve(mockItem);
    }, 2000);
  });
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getItem(id).then((data) => {
      setItem(data);
    });
  }, [id]);

  return <div>{item ? <ItemDetail item={item} /> : <p>Loading...</p>}</div>;
};

export default ItemDetailContainer;
