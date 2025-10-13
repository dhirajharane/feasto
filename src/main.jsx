import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Import App Component
import App from "./App.jsx";

// Import Redux Store
import appStore from "./assets/appStore.jsx";

// Import CSS
import "./index.css";

// Application Entry Point
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App wrapped in Redux Provider
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
