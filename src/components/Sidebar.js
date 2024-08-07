import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartLine,
  faTasks,
  faWallet,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar bg-dark text-white p-3">
      <Nav className="flex-column">
        <Nav.Link href="/" className="text-white icon">
          <FontAwesomeIcon icon={faHome} />
        </Nav.Link>
        <Nav.Link href="/orders" className="text-white icon">
          <FontAwesomeIcon icon={faChartLine} />
        </Nav.Link>
        <Nav.Link href="/feedback" className="text-white icon">
          <FontAwesomeIcon icon={faTasks} />
        </Nav.Link>
        <Nav.Link href="/wallet" className="text-white icon">
          <FontAwesomeIcon icon={faWallet} />
        </Nav.Link>
        <Nav.Link href="/bag" className="text-white icon">
          <FontAwesomeIcon icon={faShoppingBag} />
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
