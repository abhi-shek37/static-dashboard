import React from "react";
import { Card, Col, Row } from "react-bootstrap";

function DashboardStats() {
  return (
    <Row>
      <Col md={2}>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>Total Orders</Card.Text>
            <Card.Text>75</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>Total Delivered</Card.Text>
            <Card.Text>70</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>Total Cancelled</Card.Text>
            <Card.Text>5</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={2}>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>Total Revenue</Card.Text>
            <Card.Text>$12k</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>Net profit</Card.Text>
            <Card.Text>$6759.25</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default DashboardStats;
