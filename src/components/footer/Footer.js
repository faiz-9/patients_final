import React from "react";
import "./footer.css";
// import image_1 from "./images/image_1.png";
import favicon from "../../images/favicon-footer.png";
import mera_clinic from "../../images/MERA_CLINIC.png";

import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter.png";
import linkedin from "../../images/linkedin.png";

import cheveron_right from "./images/cheveron_right.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={favicon} />
        <img src={mera_clinic} style={{ marginLeft: "5px" }} />
      </div>

      <div className="first_para_container">
        <p className="first_para">
          Improving clinical outcomes and helping in navigating the healthcare
          system with a single interface.
        </p>

        <p>
          <ul>
            <li>
              <a href="#">Consult</a>
            </li>
            <li>
              <a href="#">Medicine</a>
            </li>
            <li>
              <a href="#">Diagnostic</a>
            </li>
            <li>
              <a href="#">COVID-19</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </p>
      </div>

      <div className="first_para_container mob__hid">
        <div
          className="bottom_para"
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          <p>Call Us : +91 93727 61234 Mail Us : Info@meradoc.in</p>

          <div className="social_icons" style={{ marginTop: "30px" }}>
            <img src={facebook} style={{ marginRight: "25px" }} />
            <img src={twitter} style={{ marginRight: "25px" }} />
            <img src={linkedin} />
          </div>
        </div>

        <div className="subscribe_newsletter">
          <p>Subscribe Newsletter</p>
          <input
            type="text"
            placeholder="Email"
            style={{ marginTop: "10px" }}
          />
        </div>
      </div>

      <div
        className="last-para"
        style={{ textAlign: "center", marginTop: "10px" }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </p>
      </div>

      <div className="last" style={{ marginTop: "20px" }}>
        <p>
          <a href="#">For Practices Code</a>
        </p>
        <p>
          <a href="#">KYC & PMLA</a>
        </p>
        <p>
          <a href="#" style={{ marginRight: "unset" }}>
            Privacy Policy
          </a>
        </p>
      </div>

      {/* MOBILE FOOTER   */}
      <div className="mobile_wrapper">
        <div className="mobile_footer_navigations">
          <div className="links">
            <div className="mob_nav_link">
              <a href="#">Consult</a>
            </div>
            <div className="mob_arrow">
              <img src={cheveron_right} />
            </div>
          </div>

          <div className="links">
            <div className="mob_nav_link">
              <a href="#">Medicine</a>
            </div>
            <div className="mob_arrow">
              <img src={cheveron_right} />
            </div>
          </div>

          <div className="links">
            <div className="mob_nav_link">
              <a href="#">Diagnostic</a>
            </div>
            <div className="mob_arrow">
              <img src={cheveron_right} />
            </div>
          </div>

          <div className="links">
            <div className="mob_nav_link">
              <a href="#">COVID-19</a>
            </div>
            <div className="mob_arrow">
              <img src={cheveron_right} />
            </div>
          </div>

          <div className="links">
            <div className="mob_nav_link">
              <a href="#">About</a>
            </div>
            <div className="mob_arrow">
              <img src={cheveron_right} />
            </div>
          </div>
        </div>

        <div className="contact_wrapper">
          <p>Call Us : +91 93727 61234</p>
          <p>Mail Us : Info@meradoc.in</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
