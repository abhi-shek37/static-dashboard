import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import DashboardStats from "./DashboardStats";
import DashboardContent from "./DashboardContent";
import "./Dashboard.css";

function Dashboard() {
  return (
    <Container fluid className="p-3">
      <Navbar />
      <h2>Dashboard</h2>
      <DashboardStats />
      <DashboardContent />
    </Container>
  );
}

export default Dashboard;
