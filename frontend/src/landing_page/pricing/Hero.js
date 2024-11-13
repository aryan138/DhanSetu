import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Section */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1>Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </h3>
      </div>

      {/* Pricing Plans Section */}
      <div className="row text-center p-5 mt-5">
        {/* Plan 1 */}
        <div className="col-12 col-md-4 p-4 mb-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free equity delivery"
            className="img-fluid mb-3"
            style={{ maxWidth: "80%" }}
          />
          <h1 className="fs-3">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        {/* Plan 2 */}
        <div className="col-12 col-md-4 p-4 mb-4">
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O trades"
            className="img-fluid mb-3"
            style={{ maxWidth: "80%" }}
          />
          <h1 className="fs-3">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>

        {/* Plan 3 */}
        <div className="col-12 col-md-4 p-4 mb-4">
          <img
            src="media/images/pricingEquity.svg"
            alt="Free direct MF"
            className="img-fluid mb-3"
            style={{ maxWidth: "80%" }}
          />
          <h1 className="fs-3">Free direct MF</h1>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
