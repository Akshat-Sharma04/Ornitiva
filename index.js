import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js"; // Explicitly add ".js"
import HomeContextProvider from "./Context/HomeContext.jsx"; // Explicitly add ".jsx"
import reportWebVitals from "./reportWebVitals.js"; // Explicitly add ".js"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HomeContextProvider>
    <App />
  </HomeContextProvider>
);

reportWebVitals();
