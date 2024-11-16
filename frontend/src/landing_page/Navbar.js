import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm fixed-top">
      <div className="container pb-1">
        <NavLink className="navbar-brand" to="/" style={{ marginRight: "20px" }}>
          <img
            src="media/images/logo.png"
            alt="Logo"
            className="img-fluid"
            style={{
              maxWidth: "120px",
              marginTop: "2px",
            }}
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-0">
            <li className="nav-item me-3">
              <NavLink
                className="nav-link"
                to="/signup"
                activeClassName="text-primary"
              >
                Signup
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className="nav-link"
                to="/about"
                activeClassName="text-primary"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className="nav-link"
                to="/product"
                activeClassName="text-primary"
              >
                Product
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className="nav-link"
                to="/pricing"
                activeClassName="text-primary"
              >
                Pricing
              </NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink
                className="nav-link"
                to="/support"
                activeClassName="text-primary"
              >
                Support
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
