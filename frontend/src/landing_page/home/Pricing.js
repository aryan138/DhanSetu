import React from "react";

function Pricing() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Column */}
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            style={{ textDecoration: "none", fontSize: "1.1rem", color: "#007bff" }}
          >
            See Pricing{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Empty Space Column (for medium and larger screens) */}
        <div className="col-12 col-md-1"></div>

        {/* Right Column with Pricing */}
        <div className="col-12 col-md-7">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-md-5 mb-4">
              <div className="p-3 border rounded d-flex flex-column align-items-center justify-content-center" style={{ height: "100%" }}>
                <h1 className="mb-3">₹0</h1>
                <p className="text-muted text-center">
                  Free equity delivery and
                  <br />
                  direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-5 mb-4">
              <div className="p-3 border rounded d-flex flex-column align-items-center justify-content-center" style={{ height: "100%" }}>
                <h1 className="mb-3">₹20</h1>
                <p className="text-muted text-center">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
