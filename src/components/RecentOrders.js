import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";

function RecentOrders() {
  return (
    <Col md={8} className="height2">
      <Card>
        <ListGroup variant="flush">
          <Card.Header>Recent Orders</Card.Header>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <div>Customer</div>
              <div>Order No.</div>
              <div>Amount</div>
              <div>Status</div>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <div>
                <img src="https://via.placeholder.com/40" alt="Wade Warren" />{" "}
                Wade Warren
              </div>
              <div>15478256</div>
              <div>$124.00</div>
              <button type="button" className="btn btn-success button1">
                Delivered
              </button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <div>
                <img src="https://via.placeholder.com/40" alt="Jane Cooper" />{" "}
                Jane Cooper
              </div>
              <div>48965786</div>
              <div>$305.02</div>
              <button type="button" className="btn btn-success button1">
                Delivered
              </button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <div>
                <img src="https://via.placeholder.com/40" alt="Guy Hawkins" />{" "}
                Guy Hawkins
              </div>
              <div>78958215</div>
              <div>$45.88</div>
              <button type="button" className="btn btn-danger button1">
                Cancelled
              </button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <div>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Kristin Watson"
                />{" "}
                Kristin Watson
              </div>
              <div>20965732</div>
              <div>$60.00</div>
              <button type="button" className="btn btn-danger button1">
                Pending
              </button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <div>
                <img src="https://via.placeholder.com/40" alt="Cody Fisher" />{" "}
                Cody Fisher
              </div>
              <div>95715620</div>
              <div>$545.00</div>
              <button type="button" className="btn btn-success button1">
                Success
              </button>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div className="d-flex justify-content-between">
              <div>
                <img
                  src="https://via.placeholder.com/40"
                  alt="Savannah Nguyen"
                />{" "}
                Savannah Nguyen
              </div>
              <div>78514568</div>
              <div>$128.20</div>
              <button type="button" className="btn btn-success button1">
                Delivered
              </button>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
}

export default RecentOrders;
