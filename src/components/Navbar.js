import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCog, faBell } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; 
import "./Dashboard.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body">
      <div className="container-fluid">
        <form role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div className="d-flex align-items-center ms-3">
          <div className="icon-circle me-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div className="icon-circle me-2">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="icon-circle me-2">
            <FontAwesomeIcon icon={faCog} />
          </div>
          <div className="feedback-item">
            <img src="https://via.placeholder.com/40" alt="Jenny Wilson" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
