import React from "react";
import { createRoot } from "react-dom/client"; // Importa createRoot desde react-dom/client
import "bootstrap/dist/css/bootstrap.min.css"; // Importa el archivo CSS de Bootstrap
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
