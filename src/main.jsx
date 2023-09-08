import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TicTacToeProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TicTacToeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TicTacToeProvider>
  </React.StrictMode>
);
