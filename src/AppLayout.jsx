import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/common/Header.jsx";

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