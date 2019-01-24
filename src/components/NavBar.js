import React, { Component } from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-secondary mb-5 py-0 sticky-top">
      <div className="container-fluid">
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
