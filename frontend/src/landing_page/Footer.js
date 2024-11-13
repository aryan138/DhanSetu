import React from "react";

function Footer() {
  return (
    <footer className="bg-light py-5">
      <div className="container border-top pt-4">
        <div className="row mt-5">
          {/* Logo and copyright */}
          <div className="col-md-3 col-12 mb-4 px-5">
            <img
              src="media/images/logo.png"
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "50%" }}
            />
            <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Not Dhansetu Broking Ltd. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="mt-3">
              <a
                href="#"
                className="text-dark mx-2 icon-hover-effect"
                style={{ fontSize: "24px" }}
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="text-dark mx-2 icon-hover-effect"
                style={{ fontSize: "24px" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-dark mx-2 icon-hover-effect"
                style={{ fontSize: "24px" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="text-dark mx-2 icon-hover-effect"
                style={{ fontSize: "24px" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-dark mx-2 icon-hover-effect"
                style={{ fontSize: "24px" }}
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-md-3 col-12 mb-4 px-5">
            <p className="h6 text-muted">
              <strong>Company</strong>
            </p>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Referral programme
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Dhansetu.tech
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Press & media
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Dhansetu cares (CSR)
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-3 col-12 mb-4 px-5">
            <p className="h6 text-muted">
              <strong>Support</strong>
            </p>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Support portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Z-Connect blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  List of charges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Downloads & resources
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-md-3 col-12 mb-4 px-5">
            <p className="h6 text-muted">
              <strong>Account</strong>
            </p>
            <ul className="list-unstyled">
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Open an account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  Fund transfer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-dark text-decoration-none d-block py-1 hover-effect"
                >
                  60 day challenge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal and Disclaimer */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Dhansetu Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration
            no.: INZ000031633 CDSL: Depository services through Dhansetu
            Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
            Commodity Trading through Dhansetu Commodities Pvt. Ltd. MCX: 46025
            – SEBI Registration no.: INZ000038238 Registered Address: Dhansetu
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@Dhansetu.com, for DP related to dp@Dhansetu.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorized transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is a one-time exercise while dealing in securities
            markets. Once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non-allotment, the funds will remain in
            your bank account. As a business, we don't give stock tips, and have
            not authorized anyone to trade on behalf of others. If you find
            anyone claiming to be part of Dhansetu and offering such services,
            please create a ticket here.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
