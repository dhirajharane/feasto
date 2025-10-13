import React from "react";
import { Outlet } from "react-router-dom";

// Import Header
import Header from "./components/Header.jsx";

/**
 * Main Layout Component
 * Provides the shared UI structure like Header.
 * <Outlet> renders the active nested route content.
 */
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
