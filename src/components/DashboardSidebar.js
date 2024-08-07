import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";

function DashboardSidebar() {
  return (
    <Col md={4} className="height1">
      <Card>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="chart-item feedback-item1">
              <img src="https://via.placeholder.com/40" alt="Goals" />
              <div>
                <div>Goals</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="chart-item feedback-item1">
              <img src="https://via.placeholder.com/40" alt="Popular Dishes" />
              <div>
                <div>Popular Dishes</div>
              </div>
            </ListGroup.Item>
            <ListGroup.Item className="chart-item feedback-item1">
              <img src="https://via.placeholder.com/40" alt="Menus" />
              <div>
                <div>Menus</div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default DashboardSidebar;
