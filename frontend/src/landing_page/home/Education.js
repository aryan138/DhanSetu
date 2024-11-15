import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img 
            src="media/images/education.svg" 
            alt="Education" 
            style={{ width: "100%", maxWidth: "400px", height: "auto" }} 
          />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none", fontSize: "1.1rem", color: "#007bff" }}>
            Varsity <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="" style={{ textDecoration: "none", fontSize: "1.1rem", color: "#007bff" }}>
            TradingQ&A <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
