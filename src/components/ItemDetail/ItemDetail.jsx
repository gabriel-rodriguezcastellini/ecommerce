import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem, isInCart } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = { id, name, price, img };
    addItem(item, quantity);
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="row gx-5">
          <aside className="col-lg-6">
            <div className="border rounded-4 mb-3 d-flex justify-content-center">
              <img
                style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }}
                className="rounded-4 fit"
                src={img}
              />
            </div>
          </aside>
          <main className="col-lg-6">
            <div className="ps-lg-3">
              <h4 className="title text-dark">
                {name} <br />
                {category}
              </h4>
              <div className="d-flex flex-row my-3">
                {stock > 0 ? (
                  <>
                    <span className="text-muted">
                      <i className="fas fa-shopping-basket fa-sm mx-1"></i>
                      {stock}
                    </span>
                    <span className="text-success ms-2">In stock</span>
                  </>
                ) : (
                  <span className="text-danger ms-2">Out of stock</span>
                )}
              </div>

              <div className="mb-3">
                <span className="h5">${price}</span>
              </div>

              <p>{description}</p>

              <hr />
              {isInCart(id) > 0 ? (
                <Link to="/ecommerce/cart" className="btn btn-warning shadow-0">
                  Buy now
                </Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
              )}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
