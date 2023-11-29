import React from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = ({ items }) => {
  const { id } = useParams();
  console.log("ID from URL:", id);
  console.log("Items:", items);

  const selectedItem =
    items && Array.isArray(items)
      ? items.find((item) => item.id === parseInt(id))
      : null;

  return (
    <div className="item-detail-container">
      {selectedItem ? (
        <ItemDetail item={selectedItem} />
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
