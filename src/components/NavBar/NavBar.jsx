import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
} from "mdb-react-ui-kit";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const NavBar = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const { user, logOut } = UserAuth();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const collectionRef = collection(db, "categories");
    getDocs(collectionRef)
      .then((response) => {
        const categories = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setCategories(categories);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const signOff = async (e) => {
    try {
      e.preventDefault();
      e.stopPropagation();

      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <Link to={"/"} className="navbar-brand">
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
            {categories.map((category, index) => (
              <MDBNavbarItem key={category.id}>
                <NavLink
                  to={`/category/${category.name}`}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {category.description}
                </NavLink>
              </MDBNavbarItem>
            ))}
            {user == null ? (
              <MDBNavbarItem>
                <NavLink
                  to={`/login`}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Login
                </NavLink>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    {user.displayName}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <Link
                      className="dropdown-item"
                      to={"/account-orders"}
                      onClick={"dropdown.hide()"}
                    >
                      My orders
                    </Link>
                    <Link
                      className="dropdown-item"
                      to={"/sign-out"}
                      onClick={signOff}
                    >
                      Sign out
                    </Link>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            )}
            <CartWidget />
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
