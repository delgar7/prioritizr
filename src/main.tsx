import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { ThemeProvider } from "./context/DarkModeContext";
import { UserProvider } from "./context/UsersContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </UserProvider>
  </React.StrictMode>
);
