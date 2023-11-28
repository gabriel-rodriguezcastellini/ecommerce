import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const mockItems = [
        { id: 1, name: "Item 1", price: 20 },
        { id: 2, name: "Item 2", price: 30 },
        { id: 3, name: "Item 3", price: 25 },
      ];
      setItems(mockItems);
    }, 2000);
  }, []);

  return (
    <div className="item-list-container">
      <p style={{ fontSize: "1.2rem", fontWeight: "bold", color: "#333" }}>
        {greeting}
      </p>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
