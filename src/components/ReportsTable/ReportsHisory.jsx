import React from "react";
import "./ReportsHistory.css";

const reports = [
  {
    name: "Abdelrahman Hamdi",
    id: 1,
    phone: "0110448294",
    nationalId: "303091301019**",
    location: "Maadi",
    status: "Accepted",
  },
  {
    name: "Youssef Nabil",
    id: 2,
    phone: "01210310855",
    nationalId: "303091301019**",
    location: "Maadi",
    status: "Rejected",
  },
  {
    name: "Youssef Abdallah",
    id: 3,
    phone: "01101490888",
    nationalId: "303091301019**",
    location: "Maadi",
    status: "Rejected",
  },
  {
    name: "George Wasfy",
    id: 4,
    phone: "0127066005",
    nationalId: "303091301019**",
    location: "Maadi",
    status: "Accepted",
  },
  {
    name: "Ibrahim Abdullatif",
    id: 5,
    phone: "01095981243",
    nationalId: "303091301019**",
    location: "Maadi",
    status: "Accepted",
  },
];

export default function ReportsHistory() {
  return (
    <div className="app-container">
      <div className="reports-table-h">
        <h2>Reports</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th>Reporter Name</th>
              <th>id</th>
              <th>Phone Number</th>
              <th>National ID</th>
              <th>Location</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>{report.name}</td>
                <td>{report.id}</td>
                <td>{report.phone}</td>
                <td>{report.nationalId}</td>
                <td>{report.location}</td>
                <td>
                  <span
                    className={`status-badge ${
                      report.status === "Accepted" ? "accepted" : "rejected"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-h">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <span>...</span>
          <button>38</button>
          <button>&gt;</button>
        </div>

        <p className="entries-info-h">Showing data 1 to 5 of 189 entries</p>
      </div>
    </div>
  );
}
