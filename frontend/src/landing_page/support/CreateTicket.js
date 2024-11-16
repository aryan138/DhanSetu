import React from "react";

// Reusable component for Account Opening list
function AccountOpeningLinks() {
  const links = [
    "Online Account Opening",
    "Offline Account Opening",
    "Company, Partnership and HUF Account",
    "Opening",
    "NRI Account Opening",
    "Charges at Dhansetu",
    "Dhansetu IDFC FIRST Bank 3-in-1 Account",
    "Getting Started"
  ];

  return (
    <>
      <h4>
        <i className="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
      </h4>
      {links.map((link, index) => (
        <a key={index} href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
          {link}
        </a>
      ))}
    </>
  );
}

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2">To create a ticket, select a relevant topic</h1>
        {[...Array(6)].map((_, idx) => (
          <div key={idx} className="col-4 p-5 mt-2 mb-2">
            <AccountOpeningLinks />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
