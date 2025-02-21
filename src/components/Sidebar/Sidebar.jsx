import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import SettingIcon from "../../assets/icons/setting.svg";
import DashboardIcon from "../../assets/icons/dashboard.svg";
import StationsIcon from "../../assets/icons/Marker 04.svg";
import ReportsIcon from "../../assets/icons/Alert Triangle.svg";
import HistoryIcon from "../../assets/icons/history.svg";
import SettingsIcon from "../../assets/icons/Settings.svg";
import HelpIcon from "../../assets/icons/message-question 1.svg";
import InstructionsIcon from "../../assets/icons/message-question 1 (2).svg";
import "./Sidebar.css";
import userIcon from "../../assets/icons/Ellipse 8.svg";
import { Link } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { name: "Stations", icon: StationsIcon, path: "/stations" },
  { name: "Active Reports", icon: ReportsIcon, path: "/active-reports" },
  { name: "Reports History", icon: HistoryIcon, path: "/reports-history" },
  { name: "Settings", icon: SettingsIcon, path: "/settings" },
  { name: "Help", icon: HelpIcon, path: "/help" },
  {
    name: "Reporters Instructions",
    icon: InstructionsIcon,
    path: "/instructions",
  },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header">
        <img src={SettingIcon} alt="Settings" className="header-icon" />
        {isExpanded && <span className="dashboard-text">Dashboard</span>}
      </div>

      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.path}>
            <div
              key={item.name}
              className={`sidebar-item ${
                selectedItem === item.name ? "active" : ""
              }`}
              onClick={() => setSelectedItem(item.name)}
            >
              <img src={item.icon} alt={item.name} className="sidebar-icon" />
              {isExpanded && <span className="text">{item.name}</span>}
            </div>
          </Link>
        ))}
      </div>

      <div className="sidebar-footer">
        <img src={userIcon} alt="User" className="user-icon" />
        {isExpanded && <span className="profile-text">Khaled</span>}
      </div>

      <button className="toggle-btn" onClick={() => setIsExpanded(!isExpanded)}>
        <IoIosArrowForward className={`arrow ${isExpanded ? "rotated" : ""}`} />
      </button>
    </div>
  );
}
