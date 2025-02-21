import { Button } from "antd";
import "./InstructionsTable.css";

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

const Instructions = () => {
  return (
    <div className="app-container">
      <div className="instructions-container">
        <h2>Instructions</h2>
        <br />
        <table>
          <thead>
            <tr>
              <th>Unit Name</th>
              <th>id</th>
              <th>Instruction Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {data.map((report) => (
              <tr key={report.id}>
                <td>{report.unitName}</td>
                <td>{report.id}</td>
                <td>{report.title}</td>
                <td>{report.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Button type="primary" className="add-instruction-btn">
          + Add Instruction
        </Button>

        <div className="pagination">
          <button>&lt;</button>
          <button className="active">1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <span>...</span>
          <button>38</button>
          <button>&gt;</button>
        </div>

        <p className="entries-info">Showing data 1 to 5 of 189 entries</p>
      </div>
    </div>
  );
};

export default Instructions;
