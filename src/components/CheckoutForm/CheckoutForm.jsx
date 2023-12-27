import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";

const CheckoutForm = ({ onConfirm }) => {
  const { user } = UserAuth();
  const [phone, setPhone] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name: user.displayName,
      phone,
      email: user.email,
    };
    onConfirm(userData);
  };

  return (
    <section className="intro">
      <div className="d-flex align-items-center h-100 mt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5">
                  <h1 className="mb-5 text-center">Checkout Form</h1>

                  <form onSubmit={handleConfirm}>
                    <div className="row">
                      <div className="col-12 col-md-6 mb-4">
                        <div>
                          <MDBInput
                            type="text"
                            id="form6Example1"
                            className="form-control bg-white"
                            value={user.displayName}
                            label="Name"
                            required
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <MDBInput
                        type="email"
                        id="form6Example5"
                        className="form-control bg-white"
                        value={user.email}
                        label="Email"
                        required
                        disabled
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <MDBInput
                        type="text"
                        id="form6Example6"
                        className="form-control"
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                        label="Phone"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-secondary btn-rounded btn-block"
                    >
                      Place order
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutForm;
