import React from "react";

const brandName = "ShopHub";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          {brandName}
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Celulares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Tablets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Notebooks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
