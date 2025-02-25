import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import "../App.css"; // Make sure to import the CSS file

const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return <Outlet />;
  }

  return (
    <div className={`layout ${isCollapsed ? "collapsed" : ""}`}>
      <Sidebar
        isCollapsed={isCollapsed}
        toggleSidebar={() => setIsCollapsed(!isCollapsed)}
      />
      <div className={`content ${isCollapsed ? "collapsed" : ""}`}>
        <Header isCollapsed={isCollapsed} />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
