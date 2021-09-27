import React from "react";
import "./create_profile.css";
import dashboard from "../../../images/dashboard.svg";
import profile from "../../../images/profile.svg";
import appointments from "../../../images/appointments1.svg";
import prescription from "../../../images/prescription.svg";
import settings from "../../../images/settings.svg";
import empty_profile from "../../../images/empty_profile.png";

import prescriptionInactive from "../../../images/p_inac.svg";
import family from "../../../images/family.svg";
import credit_card from "../../../images/credit-card.svg";

const CreateProfile = () => {
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

          {/* <ul className="settings">
            <li>
              <a href="#">
                <span>
                  <img src={settings} />
                </span>
                Settings
              </a>
            </li>
          </ul> */}
        </div>
      </div>

      {/* MAIN SETTINGS DASHBOARD STARTS   */}

      <div className="main_settings_dashboard">
        <div className="settings_container">
          {/* <p
            style={{
              fontWeight: "700",
              fontSize: "1.2rem",
              marginBottom: "25px",
            }}
          >
            Settings
          </p> */}

          <div className="profile__container">
            <img src={empty_profile} />
            <div className="profile_contents">
              <p className="active">Upload Profile Photo</p>
              <button>Upload</button>
            </div>
          </div>

          <div className="inputs_container">
            <div className="inputs cr_prof">
              <p className="active">Name</p>

              <input type="text" placeholder="Enter your name here" />
            </div>

            <div className="inputs cr_prof">
              <p className="active">Email ID</p>

              <input type="email" placeholder="Enter your email address" />
            </div>

            <div className="inputs cr_prof">
              <p className="active">Phone Number</p>

              <input type="text" placeholder="+91" />
            </div>

            <div className="inputs cr_prof">
              <p className="active">Date of Birth</p>

              <input type="text" placeholder="DD/MM/YYYY" />
            </div>

            <div className="inputs cr_prof ">
              <p className="active">Gender</p>
              <input type="text" placeholder="Enter Male or Female" />
              {/* <div className="gender_radio">
                <input type="radio" placeholder="Male" />
                <label>Male</label>
                <input type="radio" placeholder="Female" />
                <label>Female</label>
              </div> */}
            </div>

            <div className="inputs cr_prof">
              <p className="active">Blood Group</p>

              <input type="text" placeholder="Enter your Blood Group" />
            </div>

            <div className="inputs cr_prof">
              <p className="active">Address</p>

              <input type="text" placeholder="Enter your Address" />
            </div>
          </div>

          {/* <div className="notification_section" style={{ marginTop: "30px" }}>
            <div className="notification-content">
              <p style={{ marginBottom: "13px" }}>Notification</p>
              <div className="not_items">
                <div className="boxes">
                  <p className="active">Alert and Notifications</p>
                </div>
                <div className="boxes">
                  <input type="checkbox" />
                  SMS
                </div>
                <div className="boxes">
                  <input type="checkbox" />
                  Email
                </div>

                <div className="boxes">
                  <input type="checkbox" />
                  In App
                </div>
              </div>
            </div>
          </div> */}

          <div className="buttons_container create_prof_button">
            <div className="buttons_all">
              <button className="btn-cancel">Cancel</button>
              <button className="btn-save">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
