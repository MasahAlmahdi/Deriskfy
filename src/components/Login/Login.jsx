import React from "react";
import { Card, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="background-overlay"></div>
        <h1 className="app-title">Deriskify</h1>

        <Card className="login-card">
          <Input
            size="large"
            prefix={<UserOutlined />}
            placeholder="User Name"
            className="login-input"
          />
          <Input.Password
            size="large"
            prefix={<LockOutlined />}
            placeholder="Password"
            className="login-input"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
