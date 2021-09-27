import React from "react";
import "./Profile.css";
import dashboard from "../../images/dashboard.svg";
import profile from "../../images/profile.svg";
import appointments from "../../images/appointments1.svg";
import prescription from "../../images/prescription.svg";
import settings from "../../images/settings.svg";

import lady from "../../images/lady.png";

const Profile = () => {
  return (
    <div className="dashboard_wrapper" style={{ display: "flex" }}>
      <div className="dashboard_container">
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
          </ul>

          <ul className="settings">
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
            <img src={lady} />
            <div className="profile_contents">
              <p className="active">Upload Profile Photo</p>
              <button>Upload</button>
            </div>
          </div>

          <div className="inputs_container">
            <div className="inputs prof">
              <p className="active">Name</p>
              <p>Sarah Nair</p>
              {/* <input type="text" placeholder="Enter your new password" /> */}
            </div>

            <div className="inputs prof">
              <p className="active">Email ID</p>
              <p>sarah.nair@gmail.com</p>
              {/* <input type="email" placeholder="Enter your confirm password" /> */}
            </div>

            <div className="inputs prof">
              <p className="active">Phone Number</p>
              <p>9978735671</p>
              {/* <input type="text" placeholder="Enter your Email" /> */}
            </div>

            <div className="inputs prof">
              <p className="active">Date of Birth</p>
              <p>16/04/1968</p>
              {/* <input type="text" placeholder="Enter your Mobile Number" /> */}
            </div>

            <div className="inputs prof">
              <p className="active">Gender</p>
              <p>Female</p>
              {/* <input type="text" placeholder="Enter your Mobile Number" /> */}
            </div>

            <div className="inputs prof">
              <p className="active">Blood Group</p>
              <p>B+</p>
              {/* <input type="text" placeholder="Enter your Mobile Number" /> */}
            </div>

            <div className="inputs prof">
              <p className="active">Address</p>
              <p>12/45, car street, chennai, tamilnadu</p>
              {/* <input type="text" placeholder="Enter your Mobile Number" /> */}
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

          {/* <div className="buttons_container">
            <div className="buttons_all">
              <button className="btn-cancel">Cancel</button>
              <button className="btn-save">Save</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
