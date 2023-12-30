import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./components/Login/Login";
import { RouteProtector } from "./components/RouteProtector/RouteProtector";
import OrderListContainer from "./components/OrderListContainer/OrderListContainer";

const App = () => {
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
                element={
                  <RouteProtector>
                    <Checkout />
                  </RouteProtector>
                }
              />
              <Route
                path="/account-orders"
                element={
                  <RouteProtector>
                    <OrderListContainer />
                  </RouteProtector>
                }
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
