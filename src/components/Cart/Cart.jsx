import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import { MDBBtn } from "mdb-react-ui-kit";
import { format, addWeeks } from "date-fns";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="text-center">
        <h1>There are no items in the cart</h1>
        <Link to="/">Products</Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <section>
        <div className="row gx-lg-5">
          <div className="col-lg-8 mb-4 mb-md-0">
            <section className="mb-5">
              {cart.map((p) => (
                <CartItem key={p.id} {...p} />
              ))}
            </section>
            <section className="">
              <div className="mb-5">
                <h5 className="mb-4">Expected shipping delivery</h5>
                <p className="mb-0">{`${format(
                  addWeeks(new Date(), 1),
                  "EEE, dd.MM."
                )} - ${format(addWeeks(new Date(), 2), "EEE, dd.MM.")}`}</p>
              </div>
              <div>
                <h5 className="mb-4">We accept</h5>

                <img
                  className="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <img
                  className="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <img
                  className="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <img
                  className="mr-2"
                  width="45px"
                  src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </div>
            </section>
          </div>

          <div className="col-lg-4 mb-4 mb-md-0">
            <section className="shadow-4 p-4 rounded-5 mb-4">
              <h5 className="mb-5">The total amount of</h5>

              <div className="d-flex justify-content-between mb-3">
                <span>Temporary amount </span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping </span>
                <span>Free</span>
              </div>
              <hr className="my-4" />
              <div className="d-flex justify-content-between fw-bold mb-5">
                <span>The total amount of (including VAT) </span>
                <span>${total.toFixed(2)}</span>
              </div>

              <button
                type="button"
                className="btn btn-primary btn-rounded w-100"
              >
                Go to checkout
              </button>
              <button
                type="button"
                className="btn btn-danger btn-rounded w-100 mt-3"
                onClick={clearCart}
              >
                Clear cart
              </button>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
