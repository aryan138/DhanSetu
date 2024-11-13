import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        {/* Profile Image */}
        <div className="col-12 col-md-6 p-3 text-center">
          <img
            src="media/images/my_pic.jpeg"
            alt="Aryan Pathania"
            style={{ borderRadius: "100%", width: "50%" }}
            className="img-fluid"
          />
          <h4 className="mt-4">Aryan Pathania</h4>
          <h6>Founder, CEO</h6>
        </div>

        {/* Profile Text */}
        <div className="col-12 col-md-6 p-3 text-center text-md-start">
          <p>
            Aryan bootstrapped and founded Dhansetu in 2024 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Dhansetu has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
