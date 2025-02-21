import "./ActiveReports.css";
import alert from "../../assets/icons/Alert Triangle (1).svg";
import total from "../../assets/icons/profile-2user.svg";
import comp from "../../assets/icons/File Check 02.svg";
import ReportsTable from "../ReportsTable/ReportsTable";

export default function ActiveReports() {
  return (
    <div className="app-container">
      <div className="stats-card">
        <div className="stat-item">
          <div className="icon-container">
            <img src={total} alt="total" />
          </div>
          <div className="stat-info">
            <p className="stat-title">Total Reporters</p>
            <h2 className="stat-value">5,423</h2>
            <p className="stat-change positive">↑ 16% this month</p>
            <div className="avatars">
              <img src="https://i.pravatar.cc/30?img=1" alt="user" />
              <img src="https://i.pravatar.cc/30?img=2" alt="user" />
              <img src="https://i.pravatar.cc/30?img=3" alt="user" />
              <img src="https://i.pravatar.cc/30?img=4" alt="user" />
            </div>
          </div>
        </div>

        <div className="divider" />

        <div className="stat-item">
          <div className="icon-container">
            <img src={comp} alt="comp" />
          </div>
          <div className="stat-info">
            <p className="stat-title">Completed Reports</p>
            <h2 className="stat-value">1,893</h2>
            <p className="stat-change negative">↓ 1% this month</p>
          </div>
        </div>

        <div className="divider" />

        <div className="stat-item">
          <div className="icon-container">
            <img src={alert} alt="alert" />
          </div>
          <div className="stat-info">
            <p className="stat-title">Active Reports</p>
            <h2 className="stat-value">189</h2>
          </div>
        </div>
      </div>
      <ReportsTable />
    </div>
  );
}
