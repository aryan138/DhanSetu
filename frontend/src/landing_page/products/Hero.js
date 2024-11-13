import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5 pb-5">
      <div className="text-center mt-5 p-4">
        <h1 className="mb-3">Technology</h1>
        <h3 className="text-muted mt-3 fs-4 mb-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }} className="fw-bold">
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
