import React from "react";
import Item from "../Item/Item";
import { MDBRow } from "mdb-react-ui-kit";

const ItemList = ({ products }) => {
  return (
    <MDBRow className="row-cols-1 row-cols-md-3 g-4">
      {products.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </MDBRow>
  );
};

export default ItemList;
