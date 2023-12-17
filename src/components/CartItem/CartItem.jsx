import React, { useContext } from "react";
import { MDBInput } from "mdb-react-ui-kit";
import { CartContext } from "../../context/CartContext";

const CartItem = (product) => {
  const { removeItem } = useContext(CartContext);
  const handleRemoveItem = (e) => {
    e.preventDefault();
    removeItem(product.id);
  };
  return (
    <div className="row border-bottom mb-4">
      <div className="col-md-2 mb-4 mb-md-0">
        <div
          className="
            bg-image
            ripple
            rounded-5
            mb-4
            overflow-hidden
            d-block
            "
          data-ripple-color="light"
        >
          <img src={product.img} className="w-100" alt="" />
          <a href="#!">
            <div className="hover-overlay">
              <div
                className="mask"
                style={{
                  backgroundColor: "hsla(0, 0%, 98.4%, 0.2)",
                }}
              ></div>
            </div>
          </a>
        </div>
      </div>

      <div className="col-md-8 mb-4 mb-md-0">
        <p className="fw-bold">{product.name}</p>
        <p className="mb-4">
          <a href="" onClick={handleRemoveItem} className="text-muted pe-3">
            <small>
              <i className="fas fa-trash me-2"></i>Remove
            </small>
          </a>
        </p>
      </div>

      <div className="col-md-2 mb-4 mb-md-0">
        <div className="form-outline mb-4">
          <MDBInput
            label="Quantity"
            id={product.id}
            value={product.quantity}
            readOnly
          />
        </div>

        <h5 className="mb-2">
          <span className="align-middle">${product.price.toFixed(2)}</span>
        </h5>
      </div>
    </div>
  );
};

export default CartItem;
