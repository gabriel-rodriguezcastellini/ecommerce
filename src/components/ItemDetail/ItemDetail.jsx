import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ item }) {
  const [showItemCount, setShowItemCount] = useState(true);
  const [quantityToAdd, setQuantityToAdd] = useState(0);

  const onAdd = (quantity) => {
    setQuantityToAdd(quantity);
    setShowItemCount(false);
  };

  const onBuy = () => {
    console.log(`Added ${quantityToAdd} ${item.title} to cart`);
  };

  return (
    <div>
      {showItemCount && <ItemCount stock={10} initial={1} onAdd={onAdd} />}

      {!showItemCount && (
        <div>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <p>Quantity: {quantityToAdd}</p>
          <button className="btn btn-primary" onClick={onBuy}>
            Finish Purchase
          </button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
