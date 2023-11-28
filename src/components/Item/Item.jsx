import React, { useState } from "react";

function Item({ item, onAddToCart }) {
  const { title, description, price, pictureUrl } = item;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart({ ...item, quantity });
    setQuantity(1);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={pictureUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-sm btn-secondary me-2"
            onClick={decrementQuantity}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="btn btn-sm btn-secondary ms-2"
            onClick={incrementQuantity}
          >
            +
          </button>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Item;
