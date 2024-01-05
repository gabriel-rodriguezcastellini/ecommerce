import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";
import Login from "./components/Login/Login";
import OrderList from "./components/OrderList/OrderList";

const App = () => {
  const ProtectedRoute = ({ element: Component }) => {
    const { user } = UserAuth();

    if (!user) {
      return <Navigate to={"/login"} />;
    }

    return <Component />;
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <AuthContextProvider>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/category/:categoryId"
                element={<ItemListContainer />}
              />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route
                path="/checkout"
                element={<ProtectedRoute element={Checkout} />}
              />
              <Route
                path="/account-orders"
                element={<ProtectedRoute element={OrderList} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </CartProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
