import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>
        <div className="col-12 col-md-6 p-5">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4" style={{ lineHeight: "1.6" }}>{productDesription}</p>
          <div className="mb-4">
            <a href={tryDemo} className="text-decoration-none me-4">Try Demo</a>
            <a href={learnMore} className="text-decoration-none">Learn More</a>
          </div>
          <div>
            <a href={googlePlay} className="me-4">
              <img src="media/images/googlePlayBadge.svg" alt="Google Play Badge" className="img-fluid" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="App Store Badge" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
