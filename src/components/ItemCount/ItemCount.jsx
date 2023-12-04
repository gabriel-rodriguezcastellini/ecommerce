import { useState } from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

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
      <MDBBtnGroup>
        <MDBBtn size="sm" onClick={decrement}>
          -
        </MDBBtn>
        <h4 className="mx-3 my-auto">{quantity}</h4>
        <MDBBtn size="sm" onClick={increment}>
          +
        </MDBBtn>
      </MDBBtnGroup>
      <div className="mt-3">
        <MDBBtn onClick={() => onAdd(quantity)} disabled={!stock}>
          Add to cart
        </MDBBtn>
      </div>
    </>
  );
};

export default ItemCount;
