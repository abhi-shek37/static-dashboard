import React from "react";
import { Row } from "react-bootstrap";
import DashboardChart from "./DashboardChart";
import DashboardSidebar from "./DashboardSidebar";
import RecentOrders from "./RecentOrders";
import CustomerFeedback from "./CustomerFeedback";

function DashboardContent() {
  return (
    <>
      <Row>
        <DashboardChart />
        <DashboardSidebar />
      </Row>
      <Row>
        <RecentOrders />
        <CustomerFeedback />
      </Row>
    </>
  );
}

export default DashboardContent;
