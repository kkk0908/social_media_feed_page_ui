import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes/AppRoutes";
import "./moke-api";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
