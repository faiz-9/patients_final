import React, { useState } from "react";
// import telephoneLogo from "./images/Vector.svg";
import phone from "../../images/phone_2.png";
import image_1 from "../../images/image_1.png";
import mera_clinic from "../../images/MERA_CLINIC.png";
import user from "../../images/user.png";

import hamburger from "../../images/icon-hamburger.svg";
import closeBurger from "../../images/icon-close.svg";

import "./App.css";

const Navbar = () => {
  const [current, setCurrent] = useState(true);

  const toggler = () => {
    let nav = document.querySelector("nav");
    let nav_list = document.querySelector(".mob-nav-list");
    return (
      setCurrent(!current),
      nav.classList.toggle("new-nav"),
      nav_list.classList.toggle("show")
    );
  };

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <ul>
            <li>
              <span style={{ fontWeight: "bold" }}>COVID 19 Updates:</span>
              <span style={{ marginLeft: "15px" }}>
                <a href="#">COVID-19 Resources</a>
              </span>
            </li>
            <span className="border"></span>
            <li>
              <a href="#">Vaccine Updates</a>
            </li>
            <span className="border"></span>
            <li>
              <a href="#">Safety Measures</a>
            </li>
          </ul>
        </div>

        <div className="right">
          <ul>
            <img src={phone} style={{ marginRight: "6px" }} />
            <li>
              <a href="#">Contact Us : (+91) 9372766918</a>
            </li>
          </ul>
        </div>
        {/* BURGER ADDED */}
        <div className="burger" onClick={toggler}>
          <img src={current ? hamburger : closeBurger} />
        </div>
        {/* BURGER ADDED  */}
      </nav>

      {/* FOR MOBILE STARTS */}

      <ul className="mob-nav-list">
        <li>
          <span style={{ fontWeight: "bold" }}>COVID 19 Updates:</span>
        </li>

        <li>
          <a href="#">COVID-19 Resources</a>
        </li>

        <li>
          <a href="#">Vaccine Updates</a>
        </li>

        <li>
          <a href="#">Safety Measures</a>
        </li>
        {/* <img src={phone} style={{ marginRight: "6px" }} /> */}
        <li>
          <a href="#">Contact Us : (+91) 9372766918</a>
        </li>
      </ul>

      {/* FOR MOBILE ENDS   */}

      {/* NAVBAR ENDS */}

      <div className="search_section">
        <div className="logo_header_images">
          <img src={image_1} className="logo" alt="logo" />
          <img src={mera_clinic} className="logo_text" alt="Mera Clinic" />
        </div>

        <div className="search_right_section">
          <div className="input__box">
            <input type="text" />
            <img src={user} className="user_logo" />
          </div>

          <div className="nav_elements">
            <ul>
              <li>
                <a href="#" className="active">
                  Consult
                </a>
              </li>

              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SEARCH SECTION ENDS */}
    </>
  );
};

export default Navbar;
