import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <Link to={"/ecommerce/"} className="navbar-brand">
          ShopHub
        </Link>
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <NavLink
                to={`/ecommerce/category/cellular`}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Cellulars
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                to={`/ecommerce/category/tablet`}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Tablets
              </NavLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <NavLink
                to={`/ecommerce/category/notebook`}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Notebooks
              </NavLink>
            </MDBNavbarItem>
            <CartWidget />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
