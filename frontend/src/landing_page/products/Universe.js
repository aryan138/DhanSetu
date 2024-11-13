import React from "react";

function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1 className="mb-4">The Dhansetu Universe</h1>
        <p className="mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Universe Items */}
        <div className="col-12 col-md-6 col-lg-4 p-4 mb-4">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Platform Logo"
            className="img-fluid mb-3"
            style={{
              width: "150px",  // Fixed width
              height: "50px", // Fixed height
              objectFit: "contain", // Preserve aspect ratio
            }}
          />
          <p className="text-small text-muted mb-0">
            Thematic investment platform
          </p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-4 mb-4">
          <img
            src="media/images/streakLogo.png"
            alt="Platform Logo"
            className="img-fluid mb-3"
            style={{
              width: "150px",
              height: "50px",
              objectFit: "contain",
            }}
          />
          <p className="text-small text-muted mb-0">Algo & strategy platform</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-4 mb-4">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Platform Logo"
            className="img-fluid mb-3"
            style={{
              width: "150px",
              height: "50px",
              objectFit: "contain",
            }}
          />
          <p className="text-small text-muted mb-0">Options trading platform</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-4 mb-4">
          <img
            src="media/images/ZerodhaFundhouse.png"
            alt="Platform Logo"
            className="img-fluid mb-3"
            style={{
              width: "150px",
              height: "50px",
              objectFit: "contain",
            }}
          />
          <p className="text-small text-muted mb-0">Asset management</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-4 mb-4">
          <img
            src="media/images/goldenpiLogo.png"
            alt="Platform Logo"
            className="img-fluid mb-3"
            style={{
              width: "150px",
              height: "50px",
              objectFit: "contain",
            }}
          />
          <p className="text-small text-muted mb-0">Bonds trading platform</p>
        </div>
        <div className="col-12 col-md-6 col-lg-4 p-4 mb-4">
          <img
            src="media/images/dittoLogo.png"
            alt="Platform Logo"
            className="img-fluid mb-3"
            style={{
              width: "150px",
              height: "50px",
              objectFit: "contain",
            }}
          />
          <p className="text-small text-muted mb-0"> Insurance</p>
        </div>

        {/* Signup Button */}
        <div className="col-12 text-center mt-4 mb-5">
          <button className="btn btn-primary fs-5" style={{ width: "200px" }}>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
