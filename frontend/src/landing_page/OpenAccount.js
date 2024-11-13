import React from "react";

function OpenAccount() {
  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 fs-2 fs-md-3 mb-4">Open a Dhansetu account</h1>
        <p className="fs-5 mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="btn btn-primary fs-5 mb-4"
          style={{
            width: "50%",
            maxWidth: "300px",
            margin: "0 auto",
            padding: "12px 20px",  // Optional: add padding to make button look more prominent
          }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;
