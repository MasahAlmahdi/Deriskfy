import React from "react";
import "./About.css";
import { useParams, Link } from "react-router-dom";
import { initialReports } from "../ReportsTable/ReportsTable";
import carAccidentImage from "../../assets/img/car-accident.jpeg";

export default function ReportsDashboard() {
  const { id } = useParams();
  const report = initialReports.find((report) => report.id === parseInt(id));

  if (!report) {
    return <div>Report not found</div>;
  }

  return (
    <div className="report-dashboard-container">
      <div className="side-panel">
        <div className="back-link-container">
          <Link to="/active-reports" className="back-link">
            <span className="back-arrow">←</span> back to reports
          </Link>
        </div>

        <div className="main-image-container">
          <img
            src={carAccidentImage}
            alt="Car accident"
            className="main-accident-image"
          />
        </div>

        <div className="thumbnails-container">
          {[1, 2, 3].map((num) => (
            <div key={num} className="thumbnail">
              <img src={carAccidentImage} alt={`Accident view ${num}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="report-details-panel">
        <h2 className="report-title">About Report</h2>

        <div className="report-details-content">
          <ul className="details-list">
            <li>
              <span className="detail-label">report ID:</span> {report.id}
            </li>
            <li>
              <span className="detail-label">Reporter Name:</span> {report.name}
            </li>
            <li>
              <span className="detail-label">Phone Number:</span> {report.phone}
            </li>
            <li>
              <span className="detail-label">National ID:</span>{" "}
              {report.nationalId}
            </li>
            <li>
              <span className="detail-label">Location:</span> {report.location}
            </li>
            <li>
              <span className="detail-label">Problem Description:</span>
              <p className="problem-description">
                An accident occurred at approximately 2:30 PM on 5th Street in
                Maple involving two vehicles. The collision resulted in
                significant damage to both cars and left one individual with
                injuries. Emergency services quickly arrived at the scene to
                provide medical assistance and assess the situation. Traffic in
                the area was temporarily disrupted as authorities secured the
                location and began investigating the cause of the crash.
                Witnesses reported hearing a loud bang and described the scene
                as chaotic, with debris scattered across the road.
              </p>
            </li>
          </ul>

          <div className="user-info-section">
            <h3 className="user-info-title">User Info:</h3>
            <ul className="user-details-list">
              <li>
                <span className="detail-label">National ID:</span>{" "}
                {report.nationalId}
              </li>
              <li>
                <span className="detail-label">Full Name:</span> {report.name}
              </li>
              <li>
                <span className="detail-label">Phone Number:</span>{" "}
                {report.phone}
              </li>
            </ul>
            <button className="navigate-profile-btn">
              NAVIGATE TO USER PROFILE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
