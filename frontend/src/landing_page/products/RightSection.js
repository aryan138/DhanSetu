import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4" style={{ lineHeight: "1.6" }}>{productDesription}</p>
          <div>
            <a href={learnMore} className="text-decoration-none">
              Learn More
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
