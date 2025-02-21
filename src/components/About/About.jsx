import { Card, Typography, Image } from "antd";
import "./About.css";

const { Title, Text } = Typography;

const ReportDetails = () => {
  return (
    <div className="report-container">
      <div className="left-section">
        <Image className="main-image" src="/car" alt="Accident Report" />
      </div>

      <div className="right-section">
        <Card className="about-report-card">
          <Title level={3} className="report-title">
            About Report
          </Title>
          <Text strong>Report ID:</Text> <Text>1</Text>
          <br />
          <Text strong>Reporter Name:</Text> <Text>Abdelrahman Hamdi</Text>
          <br />
          <Text strong>Phone Number:</Text> <Text>01110448294</Text>
          <br />
          <Text strong>National ID:</Text> <Text>303091301019**</Text>
          <br />
          <Text strong>Location:</Text> <Text>304st, Saqr, Maadi</Text>
          <div className="problem-description">
            <Text strong>Problem Description:</Text>
            <Text>
              {" "}
              On 31/1/2025, a car accident occurred on 304 Street, involving two
              vehicles. The collision resulted in significant damage and
              injuries.
            </Text>
          </div>
          <button type="primary" className="navigate-button">
            Navigate to User Profile
          </button>
        </Card>
      </div>
    </div>
  );
};

export default ReportDetails;
