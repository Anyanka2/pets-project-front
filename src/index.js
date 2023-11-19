import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { roots } from "./shared/styles/roots";
// import "./shared/styles/media.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <ThemeProvider theme={roots}>
    <BrowserRouter basename="/pets-project-front">
      <App />
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>
);
