import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/ecommerce/" element={<ItemListContainer />} />
          <Route
            path="/ecommerce/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route
            path="/ecommerce/item/:itemId"
            element={<ItemDetailContainer />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
