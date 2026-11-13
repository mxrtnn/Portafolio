import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { PortfolioProvider } from "./context/PortfolioContext";
import "./styles/index.css";
import "./styles/base.css";
import "./styles/components.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </StrictMode>,
);
