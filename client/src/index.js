import React, { StrictMode } from "react";
import App from "./app";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
