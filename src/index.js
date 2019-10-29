import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

/**
 * Entry Point of the Application
 */
const rootElement = document.getElementById("root");

/**
 * App Component is written inside BrowserRouter top enable HTML's history api for keeping the sunc  in UI with URL
 */
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
