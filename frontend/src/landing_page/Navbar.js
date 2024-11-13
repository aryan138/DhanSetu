import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm ">
      <div className="container pb-1">
        <Link className="navbar-brand" to="/" style={{ marginRight: "20px" }}>
          <img
            src="media/images/logo.png"
            alt="Logo"
            className="img-fluid"
            style={{
              maxWidth: "120px",
              marginTop: "2px",  // Align logo vertically with the nav items
            }}
          />
        </Link>
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
              <Link className="nav-link active" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link" to="support">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
