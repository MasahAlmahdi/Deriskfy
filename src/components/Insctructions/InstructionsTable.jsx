import React from "react";
import { Button, Input, Table } from "antd";
import "../ReportsTable/ReportsTable.css";

const { Search } = Input;

const data = [
  {
    key: "1",
    unitName: "Traffic",
    id: 1,
    title: "Seat Belt",
    description: "Wearing Seat Belt is for your safety",
  },
  {
    key: "2",
    unitName: "Ambulance",
    id: 2,
    title: "Driving behind and close to the car",
    description: "Driving behind it isn’t safe and it’s harmful for others",
  },
  {
    key: "3",
    unitName: "Police",
    id: 3,
    title: "Guns are not allowed",
    description:
      "Guns are illegal to be in your home or in your car unless you have a license",
  },
];

const columns = [
  {
    title: "Unit Name",
    dataIndex: "unitName",
    key: "name",
  },
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Instruction Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "description",
    dataIndex: "description",
    key: "description",
  },
];

const Instructions = () => {
  return (
    <div className="reports-table">
      <h2>Instructions</h2>

      <div className="filter-controls">
        <Search
          placeholder="Search by name"
          style={{ width: 200, marginRight: 16 }}
          allowClear
        />
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="id"
      />
      <Button type="primary" className="add-instruction-btn">
        + Add Instruction
      </Button>
      <br />
      <br />
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
};

export default Instructions;
