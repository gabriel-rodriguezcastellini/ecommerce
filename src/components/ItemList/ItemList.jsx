import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

function ItemList() {
  const [items, setItems] = useState([]);

  const handleAddToCart = (item) => {
    console.log(`Added ${item.quantity} ${item.title} to cart`);
  };

  useEffect(() => {
    const fetchItems = new Promise((resolve) => {
      setTimeout(() => {
        const mockItems = [
          {
            id: 1,
            title: "Best tablet 2023",
            description: "Top options reviewed and tested",
            price: 19.99,
            pictureUrl:
              "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/07/Amazon-Fire-Max-11-review-7-scaled.jpeg",
            stock: 10,
          },
          {
            id: 2,
            title: "Best cheap tablet",
            description: "Great value Android picks and our go-to iPad",
            price: 29.99,
            pictureUrl:
              "https://www.trustedreviews.com/wp-content/uploads/sites/54/2021/11/IMG_4286-scaled.jpeg",
            stock: 5,
          },
        ];
        resolve(mockItems);
      }, 2000);
    });

    fetchItems.then((data) => {
      setItems(data);
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {items.map((item) => (
          <div key={item.id} className="col-md-4 mb-3">
            <Item item={item} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
