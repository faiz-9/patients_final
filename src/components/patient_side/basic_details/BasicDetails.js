import React, { useState } from "react";

import "./basicdetails.css";
import dashboard from "../../../images/dashboard.svg";
import profile from "../../../images/profile.svg";
import appointments from "../../../images/appointments1.svg";
import prescription from "../../../images/prescription.svg";
import settings from "../../../images/settings.svg";
import empty_profile from "../../../images/empty_profile.png";

import prescriptionInactive from "../../../images/p_inac.svg";
import family from "../../../images/family.svg";
import credit_card from "../../../images/credit-card.svg";

import person from "./images/person.png";

const BasicDetails = () => {
  return (
    <div className="dashboard_wrapper" style={{ display: "flex" }}>
      <div className="dashboard_container create_profile_dashboard">
        <div className="dashboard_contents">
          <ul>
            <li>
              <a href="#">
                <span>
                  <img src={dashboard} />
                </span>
                Dashboard
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <img src={profile} />
                </span>
                Profile
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <img src={appointments} />
                </span>
                Appointments
              </a>
            </li>

            <li>
              <a href="#" className="active_class">
                <span>
                  <img src={prescription} />
                </span>
                Prescription
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <img src={prescriptionInactive} />
                </span>
                Purchase History
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <img src={prescriptionInactive} />
                </span>
                Medicines
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <img src={prescriptionInactive} />
                </span>
                Test
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <img src={family} />
                </span>
                Family
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <img src={credit_card} />
                </span>
                Payment Details
              </a>
            </li>

            <li>
              <a href="#">
                <span>
                  <img src={settings} />
                </span>
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* MAIN SETTINGS DASHBOARD STARTS   */}

      <div className="main_settings_dashboard">
        <div className="details_container">
          <div className="basic_heading">
            <p>Basic Details</p>
          </div>
          <div className="details_first">
            <div className="top_img">
              <img src={person} />
            </div>
            <div className="names_wrapper">
              <div className="names_container">
                <div className="basic_names">
                  <p>First Name</p>
                  <p>John</p>
                </div>

                <div className="basic_names">
                  <p>Last Name</p>
                  <p>Doe</p>
                </div>
              </div>

              <div className="second_detail">
                <p>Email ID</p>
                <p>johndoe@homechef.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicDetails;
