import React from "react";
import "./Header.css";

export default function Header({ isCollapsed }) {
  return (
    <div className={`global-header ${isCollapsed ? "collapsed" : ""}`}>
      <h1 className="greeting">Hello Khaled 👋,</h1>

      <div className="search-bar">
        <svg
          className="search-icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35m2.1-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </div>
  );
}
