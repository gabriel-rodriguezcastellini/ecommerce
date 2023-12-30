import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const OrderListContainer = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(false);
  const orders = [];

  useEffect(() => {
    if (user.email) {
      (async () => {
        setLoading(true);

        try {
          (
            await getDocs(
              query(
                collection(db, "orders"),
                where("buyer.email", "==", user.email)
              )
            )
          ).forEach((doc) => {
            orders.push(doc.data());
          });
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);

          console.log(orders);
        }
      })();
    }
  }, [user]);

  return (
    <>
      <div className="page-title-overlap bg-dark pt-4">
        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 className="h3 text-light mb-0">My orders</h1>
        </div>
      </div>
      <div className="container pb-5 mb-2 mb-md-4">
        <div className="row">
          <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
            <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
              <div className="d-md-flex justify-content-between align-items-center text-center text-md-start p-4">
                <div className="d-md-flex align-items-center">
                  <div
                    className="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0"
                    style={{ width: "6.375rem" }}
                  >
                    <img
                      className="rounded-circle"
                      src={user.photoURL}
                      alt={user.displayName}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        verticalAlign: "middle",
                      }}
                    />
                  </div>
                  <div className="ps-md-3">
                    <h3 className="fs-base mb-0">{user.displayName}</h3>
                    <span className="text-accent fs-sm">{user.email}</span>
                  </div>
                </div>
              </div>
              <div className="d-lg-block collapse" id="account-menu">
                <div className="bg-secondary px-4 py-3">
                  <h3 className="fs-sm mb-0 text-muted">Dashboard</h3>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="border-bottom mb-0">
                    <a className="nav-link-style d-flex align-items-center px-4 py-3 active">
                      <i className="ci-bag opacity-60 me-2"></i>Orders
                      <span className="fs-sm text-muted ms-auto">1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <section className="col-lg-8">
            <div className="table-responsive fs-md mb-4">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Order #</th>
                    <th>Date Purchased</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3">
                      <a
                        className="nav-link-style fw-medium fs-sm"
                        href="#order-details"
                        data-bs-toggle="modal"
                      >
                        34VB5540K83
                      </a>
                    </td>
                    <td className="py-3">May 21, 2019</td>
                    <td className="py-3">
                      <span className="badge bg-info m-0">In Progress</span>
                    </td>
                    <td className="py-3">$358.75</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <a
                        className="nav-link-style fw-medium fs-sm"
                        href="#order-details"
                        data-bs-toggle="modal"
                      >
                        78A643CD409
                      </a>
                    </td>
                    <td className="py-3">December 09, 2018</td>
                    <td className="py-3">
                      <span className="badge bg-danger m-0">Canceled</span>
                    </td>
                    <td className="py-3">
                      <span>$760.50</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <a
                        className="nav-link-style fw-medium fs-sm"
                        href="#order-details"
                        data-bs-toggle="modal"
                      >
                        112P45A90V2
                      </a>
                    </td>
                    <td className="py-3">October 15, 2018</td>
                    <td className="py-3">
                      <span className="badge bg-warning m-0">Delayed</span>
                    </td>
                    <td className="py-3">$1,264.00</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <a
                        className="nav-link-style fw-medium fs-sm"
                        href="#order-details"
                        data-bs-toggle="modal"
                      >
                        28BA67U0981
                      </a>
                    </td>
                    <td className="py-3">July 19, 2018</td>
                    <td className="py-3">
                      <span className="badge bg-success m-0">Delivered</span>
                    </td>
                    <td className="py-3">$198.35</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <a
                        className="nav-link-style fw-medium fs-sm"
                        href="#order-details"
                        data-bs-toggle="modal"
                      >
                        502TR872W2
                      </a>
                    </td>
                    <td className="py-3">April 04, 2018</td>
                    <td className="py-3">
                      <span className="badge bg-success m-0">Delivered</span>
                    </td>
                    <td className="py-3">$2,133.90</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <a
                        className="nav-link-style fw-medium fs-sm"
                        href="#order-details"
                        data-bs-toggle="modal"
                      >
                        47H76G09F33
                      </a>
                    </td>
                    <td className="py-3">March 30, 2018</td>
                    <td className="py-3">
                      <span className="badge bg-success m-0">Delivered</span>
                    </td>
                    <td className="py-3">$86.40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default OrderListContainer;
