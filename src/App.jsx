import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/ecommerce/" />} />
            <Route path="/ecommerce/" element={<ItemListContainer />} />
            <Route
              path="/ecommerce/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/ecommerce/item/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route path="/ecommerce/cart" element={<Cart />} />
            <Route path="/ecommerce/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
