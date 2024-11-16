import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5" id="supportWrapper">
        <h2>Support Portal</h2>
        <a href="" className="btn btn-link">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        {/* Left Section: Search and Help Topics */}
        <div className="col-lg-6 col-12 p-5">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Eg. how do I activate F&O" 
          />
          <br />
          <div className="mt-3 d-flex flex-wrap">
            <a href="" className="d-block mt-2 col-6 col-lg-auto mx-2 mb-2">Track account opening</a>
            <a href="" className="d-block mt-2 col-6 col-lg-auto mx-2 mb-2">Track segment activation</a>
            <a href="" className="d-block mt-2 col-6 col-lg-auto mx-2 mb-2">Intraday margins</a>
            <a href="" className="d-block mt-2 col-6 col-lg-auto mx-2 mb-2">Kite user manual</a>
          </div>
        </div>

        {/* Right Section: Featured */}
        <div className="col-lg-6 col-12 p-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" className="d-block">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" className="d-block">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
