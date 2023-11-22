import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./shared/styles/theme";
// import "./shared/styles/media.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/pets-project-front">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
