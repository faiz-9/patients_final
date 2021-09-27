import React from "react";
import "./prescription.css";
import dashboard from "../../../images/dashboard.svg";
import profile from "../../../images/profile.svg";
import appointments from "../../../images/appointments1.svg";
import prescription from "../../../images/prescription.svg";
import settings from "../../../images/settings.svg";
import empty_profile from "../../../images/empty_profile.png";

import prescriptionInactive from "../../../images/p_inac.svg";
import family from "../../../images/family.svg";
import credit_card from "../../../images/credit-card.svg";

import eye from "./images/eye.png";
import download from "./images/download.png";

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

          <div className="prescription__container">
            <p className="pres_h">Prescription and Orders</p>
            <div className="filter">
              <span className="filter_icon"></span>
              <button>Filter</button>
            </div>
          </div>

          <div className="table_wrapper">
            <table>
              <tr>
                <th>S.No</th>
                <th>Booking ID</th>
                <th>ERX Number</th>
                <th>Treatment</th>
                <th>Medicine</th>
                <th>Prescribed By</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>

              <tr>
                <td>1</td>
                <td>941634</td>
                <td>213494</td>
                <td>Fever</td>
                <td>Lorem Ipsum</td>
                <td>Dr. Sathya</td>
                <td>10/06/2021</td>
                <td>
                  <img src={eye} />
                  <span>
                    <img src={download} style={{ marginLeft: "8px" }} />
                  </span>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>941634</td>
                <td>213494</td>
                <td>Fever</td>
                <td>Lorem Ipsum</td>
                <td>Dr. Sathya</td>
                <td>10/06/2021</td>
                <td>
                  <img src={eye} />
                  <span>
                    <img src={download} style={{ marginLeft: "8px" }} />
                  </span>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>941634</td>
                <td>213494</td>
                <td>Fever</td>
                <td>Lorem Ipsum</td>
                <td>Dr. Sathya</td>
                <td>10/06/2021</td>
                <td>
                  <img src={eye} />
                  <span>
                    <img src={download} style={{ marginLeft: "8px" }} />
                  </span>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>941634</td>
                <td>213494</td>
                <td>Fever</td>
                <td>Lorem Ipsum</td>
                <td>Dr. Sathya</td>
                <td>10/06/2021</td>
                <td>
                  <img src={eye} />
                  <span>
                    <img src={download} style={{ marginLeft: "8px" }} />
                  </span>
                </td>
              </tr>

              <tr>
                <td>5</td>
                <td>941634</td>
                <td>213494</td>
                <td>Fever</td>
                <td>Lorem Ipsum</td>
                <td>Dr. Sathya</td>
                <td>10/06/2021</td>
                <td>
                  <img src={eye} />
                  <span>
                    <img src={download} style={{ marginLeft: "8px" }} />
                  </span>
                </td>
              </tr>

              <tr>
                <td>6</td>
                <td>941634</td>
                <td>213494</td>
                <td>Fever</td>
                <td>Lorem Ipsum</td>
                <td>Dr. Sathya</td>
                <td>10/06/2021</td>
                <td>
                  <img src={eye} />
                  <span>
                    <img src={download} style={{ marginLeft: "8px" }} />
                  </span>
                </td>
              </tr>

              <tr>
                <td>7</td>
                <td>941634</td>
                <td>213494</td>
                <td>Fever</td>
                <td>Lorem Ipsum</td>
                <td>Dr. Sathya</td>
                <td>10/06/2021</td>
                <td>
                  <img src={eye} />
                  <span>
                    <img src={download} style={{ marginLeft: "8px" }} />
                  </span>
                </td>
              </tr>

              <tr>
                <td>8</td>
                <td>941634</td>
                <td>213494</td>
                <td>Fever</td>
                <td>Lorem Ipsum</td>
                <td>Dr. Sathya</td>
                <td>10/06/2021</td>
                <td>
                  <img src={eye} />
                  <span>
                    <img src={download} style={{ marginLeft: "8px" }} />
                  </span>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
