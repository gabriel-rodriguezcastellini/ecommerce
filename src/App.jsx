import React from "react";
import MainTitle from "./components/MainTitle/MainTitle";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainTitle />
    </div>
  );
};

export default App;
