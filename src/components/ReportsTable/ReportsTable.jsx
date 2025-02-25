import React, { useState } from "react";
import { Input, Table, Tag, Select } from "antd";
import "./ReportsTable.css";
import { useNavigate } from "react-router-dom";

const { Search } = Input;
const { Option } = Select;

const columns = [
  {
    title: "Reporter Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Phone Number",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "National ID",
    dataIndex: "nationalId",
    key: "nationalId",
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => {
      const statusStyles = {
        Accepted: {
          background: "#16C09861",
          border: "1px solid #00B087",
          color: "#00B087",
        },
        Rejected: {
          background: "#FFC5C5",
          border: "1px solid #DF0404",
          color: "#DF0404",
        },
      };
      return (
        <Tag
          style={{
            ...statusStyles[status],
            borderRadius: "4px",
            padding: "4px 12px",
          }}
        >
          {status}
        </Tag>
      );
    },
  },
];

export const initialReports = [
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

export default function ReportsTable() {
  const [filteredReports, setFilteredReports] = useState(initialReports);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleRowClick = (record) => {
    navigate(`/about/${record.id}`);
  };

  const handleSearch = (value) => {
    setSearchText(value);
    filterReports(value, statusFilter);
  };

  const handleStatusChange = (value) => {
    setStatusFilter(value);
    filterReports(searchText, value);
  };

  const filterReports = (searchValue, statusValue) => {
    const filtered = initialReports.filter((report) => {
      const matchesSearch = report.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesStatus = statusValue ? report.status === statusValue : true;
      return matchesSearch && matchesStatus;
    });
    setFilteredReports(filtered);
    setCurrentPage(1);
  };

  return (
    <div className="reports-table">
      <h2>Reports</h2>
      <p className="active-reports" style={{ color: "#16C098" }}>
        Active Reports
      </p>

      <div className="filter-controls">
        <Search
          placeholder="Search by name"
          onSearch={handleSearch}
          style={{ width: 200, marginRight: 16 }}
          allowClear
        />
        <Select
          placeholder="Filter by Status"
          onChange={handleStatusChange}
          allowClear
          style={{ width: 200 }}
        >
          <Option value="Accepted">Accepted</Option>
          <Option value="Rejected">Rejected</Option>
        </Select>
      </div>

      <Table
        columns={columns}
        dataSource={filteredReports.slice(
          (currentPage - 1) * 5,
          currentPage * 5
        )}
        pagination={false}
        rowKey="id"
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />
      <br />
      <div className="pag">
        <p className="entries-info-h">Showing data 1 to 5 of 189 entries</p>
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
      </div>
    </div>
  );
}
