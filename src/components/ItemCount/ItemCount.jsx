import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-md-4 col-6">
          <label className="mb-2 d-block">Quantity</label>
          <div className="input-group mb-3" style={{ width: "170px" }}>
            <button
              className="btn btn-white border border-secondary px-3"
              type="button"
              id="button-addon1"
              data-mdb-ripple-color="dark"
              onClick={decrement}
            >
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="text"
              className="form-control text-center border border-secondary"
              placeholder={quantity}
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
            <button
              className="btn btn-white border border-secondary px-3"
              type="button"
              id="button-addon2"
              data-mdb-ripple-color="dark"
              onClick={increment}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <a
        className="btn btn-primary shadow-0"
        onClick={() => onAdd(quantity)}
        disabled={!stock}
      >
        <i className="me-1 fa fa-shopping-basket"></i> Add to cart
      </a>
    </>
  );
};

export default ItemCount;
