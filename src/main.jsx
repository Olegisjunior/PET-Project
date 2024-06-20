import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/pages/App";
import "./index.css";
// import Mtb from "./components/pages/Mtb";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Mtb /> */}
    </BrowserRouter>
  </React.StrictMode>
);
