import React from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}>
        {greeting}
      </p>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
