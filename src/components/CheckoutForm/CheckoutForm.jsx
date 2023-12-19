import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name,
      phone,
      email,
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
                        <div className="form-outline">
                          <MDBInput
                            type="text"
                            id="form6Example1"
                            className="form-control"
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                            label="Name"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <MDBInput
                        type="email"
                        id="form6Example5"
                        className="form-control"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        label="Email"
                        required
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
