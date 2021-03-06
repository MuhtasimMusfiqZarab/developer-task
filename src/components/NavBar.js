import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-5 py-0 sticky-top navv">
      <div className="container-fluid">
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home">Home</i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./team" className="nav-link">
                <i className="fas fa-users">Team</i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
