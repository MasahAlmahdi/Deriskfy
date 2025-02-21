import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return <Outlet />;
  }

  return (
    <div className="app-layout flex">
      <Sidebar />
      <div className="main-content flex-1">
        <Header />
        <div className="page-content p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
