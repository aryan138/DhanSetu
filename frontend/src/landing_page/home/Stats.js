import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        {/* Left Column */}
        <div className="col-md-6 p-5">
          <h1 className="fs-1 mb-4">Trust with confidence</h1>
          <h2 className="fs-4 mb-3">Customer-first always</h2>
          <p className="text-muted mb-4">
            That's why 1.3+ crore customers trust Dhansetu with ₹3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4 mb-3">No spam or gimmicks</h2>
          <p className="text-muted mb-4">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4 mb-3">The Dhansetu universe</h2>
          <p className="text-muted mb-4">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4 mb-3">Do better with money</h2>
          <p className="text-muted mb-5">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        {/* Right Column */}
        <div className="col-md-6 p-5">
          <img
            src="media/images/ecosystem.png"
            alt="Dhansetu Ecosystem"
            className="img-fluid mb-4"
            style={{ width: "90%" }}
          />
          <div className="text-center mt-4 d-flex justify-content-center gap-5">
            <a
              href="#"
              className="text-decoration-none"
              style={{ fontSize: "1.1rem", color: "#007bff" }}
            >
              Explore our products{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              style={{ fontSize: "1.1rem", color: "#007bff" }}
            >
              Try Kite demo{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
