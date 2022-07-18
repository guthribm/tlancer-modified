import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./store/auth-context";
import { SignUpContextProvider } from "./store/signup-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <SignUpContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SignUpContextProvider>
  </AuthContextProvider>
);
