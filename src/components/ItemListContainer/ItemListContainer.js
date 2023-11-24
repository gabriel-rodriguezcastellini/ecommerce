import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}>
        {greeting}
      </p>
    </div>
  );
};

export default ItemListContainer;
