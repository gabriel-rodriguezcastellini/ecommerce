import React, { useState } from "react";
import { Link } from "react-router-dom";

function Item({ item, onAddToCart }) {
  const { id, title, description, price, pictureUrl, stock } = item;
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity <= stock && quantity > 0) {
      onAddToCart({ ...item, quantity });
      setQuantity(1);
    } else if (quantity <= 0) {
      alert("Please select a valid quantity");
    } else {
      alert(`Only ${stock} items available`);
    }
  };

  const incrementQuantity = () => {
    if (quantity < stock) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="card mb-3">
      <Link to={`/item/${id}`}>
        <img src={pictureUrl} className="card-img-top" alt={title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Price: ${price}</p>
        <p className="card-text">Stock: {stock}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <button
              className="btn btn-outline-secondary"
              onClick={decrementQuantity}
            >
              -
            </button>
            <span className="btn btn-light">{quantity}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={incrementQuantity}
              disabled={quantity >= stock}
            >
              +
            </button>
          </div>
          <button
            className="btn btn-primary"
            onClick={handleAddToCart}
            disabled={stock <= 0}
          >
            {stock <= 0 ? "Out of Stock" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
