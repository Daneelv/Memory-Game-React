import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "./index.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
