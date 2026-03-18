import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { LangProvider } from "./context/LangContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <LangProvider>
      <App />
    </LangProvider>
  </ThemeProvider>
);