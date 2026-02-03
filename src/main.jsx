import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const baseUrl = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "") || undefined;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename={baseUrl}>
      <App />
    </HashRouter>
  </StrictMode>,
);
