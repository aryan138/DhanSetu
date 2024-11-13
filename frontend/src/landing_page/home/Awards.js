import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 text-center p-5">
          <img
            src="media/images/largestBroker.svg"
            alt="Largest Broker"
            className="img-fluid"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 p-5">
          <h2 className="display-6 fw-bold mb-4">Largest Stock Broker in India</h2>
          <p className="lead mb-5">
            2+ million Dhansetu clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <ul>
                <li><p>Futures and Options</p></li>
                <li><p>Commodity derivatives</p></li>
                <li><p>Currency derivatives</p></li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <ul>
                <li><p>Stocks & IPOs</p></li>
                <li><p>Direct mutual funds</p></li>
                <li><p>Bonds and Govt. Securities</p></li>
              </ul>
            </div>
          </div>

          {/* Press Logos */}
          <div className="mt-5 text-center">
            <img
              src="media/images/pressLogos.png"
              alt="Press Logos"
              style={{ width: "90%", maxWidth: "400px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
