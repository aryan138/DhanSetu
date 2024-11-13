import React from "react";

function Hero() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-8">
          <img
            src="media/images/homeHero.png"
            alt="Home"
            className="img-fluid mb-4"
          />
          <h1 className="display-4 fw-bold mt-3 mb-2">Invest in Everything</h1>
          <p className="lead text-muted">
            Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.
          </p>
          <button
            className="btn btn-primary btn-lg mt-4"
          >
            Sign Up for Free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
