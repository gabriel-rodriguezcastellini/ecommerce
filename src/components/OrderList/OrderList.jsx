import React, { useEffect, useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import {
  collection,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { MDBSpinner } from "mdb-react-ui-kit";
import { parse, format } from "date-fns";

const OrderList = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user.email) {
      setLoading(true);
      const fetchOrders = async () => {
        try {
          const snapshot = await getDocs(
            query(
              collection(db, "orders"),
              where("buyer.email", "==", user.email)
            )
          );

          const fetchedOrders = [];
          snapshot.forEach((doc) => {
            const order = doc.data();
            order.id = doc.id;
            fetchedOrders.push(order);
          });

          setOrders(fetchedOrders);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchOrders();
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
                      <span className="fs-sm text-muted ms-auto">
                        {loading ? "loading..." : orders.length}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
          <section className="col-lg-8 text-center">
            {!loading ? (
              orders.length > 0 ? (
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
                    {orders.map((order, index) => (
                      <tr key={order.id}>
                        <td className="py-3">
                          <a
                            className="nav-link-style fw-medium fs-sm"
                            href="#order-details"
                            data-bs-toggle="modal"
                          >
                            {order.id}
                          </a>
                        </td>
                        <td className="py-3">
                          {format(order.date.toDate(), "MMMM d, yyyy")}
                        </td>
                        <td className="py-3">
                          <span className="badge bg-info m-0">In Progress</span>
                        </td>
                        <td className="py-3">${order.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="mt-3">You don't have any order yet.</div>
              )
            ) : (
              <MDBSpinner role="status" className="mx-auto mt-3">
                <span className="visually-hidden">Loading...</span>
              </MDBSpinner>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default OrderList;
