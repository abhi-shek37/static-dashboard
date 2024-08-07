import React from "react";
import { Card, Col, ListGroup } from "react-bootstrap";

function CustomerFeedback() {
  return (
    <Col md={4} className="height2">
      <Card>
        <ListGroup variant="flush">
          <Card.Header>Customer's Feedback</Card.Header>
          <ListGroup.Item className="feedback-item">
            <div>
              <img src="https://via.placeholder.com/40" alt="Jenny Wilson" />
              <div>Jenny Wilson</div>
            </div>
            <div>
              <div>⭐⭐⭐⭐⭐</div>
              <p>
                The food was excellent and so was the service. I had the
                mushroom risotto with scallops which was awesome. I had a burger
                and greens (gluten-free) which was also very good. They were
                very conscientious about gluten allergies.
              </p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="feedback-item">
            <div>
              <img src="https://via.placeholder.com/40" alt="Jenny Wilson" />
              <div>Jenny Wilson</div>
            </div>
            <div>
              <div>⭐⭐⭐⭐⭐</div>
              <p>
                The food was excellent and so was the service. I had the
                mushroom risotto with scallops which was awesome. I had a burger
                and greens (gluten-free) which was also very good. They were
                very conscientious about gluten allergies.
              </p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item className="feedback-item">
            <div>
              <img src="https://via.placeholder.com/40" alt="Jenny Wilson" />
              <div>Jenny Wilson</div>
            </div>
            <div>
              <div>⭐⭐⭐⭐⭐</div>
              <p>
                The food was excellent and so was the service. I had the
                mushroom risotto with scallops which was awesome. I had a burger
                and greens (gluten-free) which was also very good. They were
                very conscientious about gluten allergies.
              </p>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  );
}

export default CustomerFeedback;
