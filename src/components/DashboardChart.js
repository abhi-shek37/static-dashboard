import React from "react";
import { Card, Col } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: Array.from({ length: 24 }, (_, i) => i + 1),
  datasets: [
    {
      label: "Activity",
      data: [
        5000, 10000, 7000, 15000, 12000, 10000, 5000, 9000, 14000, 8000, 6000,
        11000, 13000, 9000, 6000, 12000, 14000, 15000, 10000, 5000, 9000, 7000,
        8000, 11000,
      ],
      backgroundColor: "#6f86d6",
    },
  ],
};

function DashboardChart() {
  return (
    <Col md={8} className="height1">
      <Card className="activity-chart">
        <Card.Body>
          <Bar className="bar-chart" data={data} />
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DashboardChart;
