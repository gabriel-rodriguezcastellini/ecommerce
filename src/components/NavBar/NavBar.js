import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const brandName = "ShopHub";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/ecommerce">
          {brandName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/ecommerce">
                Cellulars
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ecommerce">
                Tablets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ecommerce">
                Notebooks
              </a>
            </li>
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
