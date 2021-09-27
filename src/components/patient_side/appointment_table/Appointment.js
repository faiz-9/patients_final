import React, { useState } from "react";

import "./appointment.css";
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

import maya from "./images/maya.png";
import confirmed from "./images/confirmed.png";

import external_link from "./images/external-link.png";
import group from "./images/Group.png";

const Appointment = () => {
  const viewOptions = () => {
    let view_options = document.querySelector(".view_options");

    return view_options.classList.toggle("show_options");
  };

  // COPY
  // const bgSet = (e) => {
  //   const target = e.target.parentElement;
  //   console.log(`TARGET IS ${target} `);

  //   const children = target.parentElement;

  //   console.log(`CHILDREN IS ${children}`);
  //   // const target = e.target.parentElement;
  //   // const children = target.lastElementChild.children;

  //   Array.from(children).forEach((child) => {
  //     console.log(child);
  //     if (child.classList.contains("show_options")) {
  //       child.classList.remove("show_options");
  //     }
  //   });
  //   target.classList.add("show_options");
  // };
  // COPY

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

          <div className="appointment__container">
            <button>New Appointment</button>
          </div>

          <div className="table_wrapper">
            <table>
              <tr>
                <th>Date</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Status</th>
                <th>Mode</th>
                <th>More</th>
              </tr>

              <tr>
                <td>
                  12/9 /2021 <br />
                  10:00 AM
                </td>
                <td>Sarah Nair</td>
                <td>
                  <div className="single_line">
                    <img src={maya} />
                    <div className="single_line_content">
                      <span className="single_weight">Dr. Maya </span>
                      <br /> General Practitioner
                    </div>
                  </div>
                </td>
                <td>
                  <button>Join Call</button>
                </td>
                <td>Online</td>
                <td>
                  <div className="relative_position">
                    <button id="dt_btn" className="view" onClick={viewOptions}>
                      <div class="dots">•••</div>
                    </button>
                    <div className="view_options">
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">View more</a>
                      </div>
                      <div className="options">
                        <img src={group} />
                        <a href="#">Reschedule</a>
                      </div>
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">Cancel</a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button id="view_more">View More</button>
                </td>
              </tr>

              <tr>
                <td>
                  12/9 /2021 <br />
                  10:00 AM
                </td>
                <td>Sarah Nair</td>
                <td>
                  <div className="single_line">
                    <img src={maya} />
                    <div className="single_line_content">
                      <span className="single_weight">Dr. Maya </span>
                      <br /> General Practitioner
                    </div>
                  </div>
                </td>
                <td>
                  <button>Join Call</button>
                </td>
                <td>Online</td>
                <td>
                  <div className="relative_position">
                    <button id="dt_btn" className="view" onClick={viewOptions}>
                      <div class="dots">•••</div>
                    </button>
                    <div className="view_options">
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">View more</a>
                      </div>
                      <div className="options">
                        <img src={group} />
                        <a href="#">Reschedule</a>
                      </div>
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">Cancel</a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button id="view_more">View More</button>
                </td>
              </tr>

              <tr>
                <td>
                  12/9 /2021 <br />
                  10:00 AM
                </td>
                <td>Sarah Nair</td>
                <td>
                  <div className="single_line">
                    <img src={maya} />
                    <div className="single_line_content">
                      <span className="single_weight">Dr. Maya </span>
                      <br /> General Practitioner
                    </div>
                  </div>
                </td>
                <td>
                  <button>Join Call</button>
                </td>
                <td>Online</td>
                <td>
                  <div className="relative_position">
                    <button id="dt_btn" className="view" onClick={viewOptions}>
                      <div class="dots">•••</div>
                    </button>
                    <div className="view_options">
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">View more</a>
                      </div>
                      <div className="options">
                        <img src={group} />
                        <a href="#">Reschedule</a>
                      </div>
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">Cancel</a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button id="view_more">View More</button>
                </td>
              </tr>

              <tr>
                <td>
                  12/9 /2021 <br />
                  10:00 AM
                </td>
                <td>Sarah Nair</td>
                <td>
                  <div className="single_line">
                    <img src={maya} />
                    <div className="single_line_content">
                      <span className="single_weight">Dr. Maya </span>
                      <br /> General Practitioner
                    </div>
                  </div>
                </td>
                <td>
                  <button>Join Call</button>
                </td>
                <td>Online</td>
                <td>
                  <div className="relative_position">
                    <button id="dt_btn" className="view" onClick={viewOptions}>
                      <div class="dots">•••</div>
                    </button>
                    <div className="view_options">
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">View more</a>
                      </div>
                      <div className="options">
                        <img src={group} />
                        <a href="#">Reschedule</a>
                      </div>
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">Cancel</a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button id="view_more">View More</button>
                </td>
              </tr>

              <tr>
                <td>
                  12/9 /2021 <br />
                  10:00 AM
                </td>
                <td>Sarah Nair</td>
                <td>
                  <div className="single_line">
                    <img src={maya} />
                    <div className="single_line_content">
                      <span className="single_weight">Dr. Maya </span>
                      <br /> General Practitioner
                    </div>
                  </div>
                </td>
                <td>
                  <button>Join Call</button>
                </td>
                <td>Online</td>
                <td>
                  <div className="relative_position">
                    <button id="dt_btn" className="view" onClick={viewOptions}>
                      <div class="dots">•••</div>
                    </button>
                    <div className="view_options">
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">View more</a>
                      </div>
                      <div className="options">
                        <img src={group} />
                        <a href="#">Reschedule</a>
                      </div>
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">Cancel</a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button id="view_more">View More</button>
                </td>
              </tr>

              <tr>
                <td>
                  12/9 /2021 <br />
                  10:00 AM
                </td>
                <td>Sarah Nair</td>
                <td>
                  <div className="single_line">
                    <img src={maya} />
                    <div className="single_line_content">
                      <span className="single_weight">Dr. Maya </span>
                      <br /> General Practitioner
                    </div>
                  </div>
                </td>
                <td>
                  <button>Join Call</button>
                </td>
                <td>Online</td>
                <td>
                  <div className="relative_position">
                    <button id="dt_btn" className="view" onClick={viewOptions}>
                      <div class="dots">•••</div>
                    </button>
                    <div className="view_options">
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">View more</a>
                      </div>
                      <div className="options">
                        <img src={group} />
                        <a href="#">Reschedule</a>
                      </div>
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">Cancel</a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button id="view_more">View More</button>
                </td>
              </tr>

              <tr>
                <td>
                  12/9 /2021 <br />
                  10:00 AM
                </td>
                <td>Sarah Nair</td>
                <td>
                  <div className="single_line">
                    <img src={maya} />
                    <div className="single_line_content">
                      <span className="single_weight">Dr. Maya </span>
                      <br /> General Practitioner
                    </div>
                  </div>
                </td>
                <td>
                  <button>Join Call</button>
                </td>
                <td>Online</td>
                <td>
                  <div className="relative_position">
                    <button id="dt_btn" className="view" onClick={viewOptions}>
                      <div class="dots">•••</div>
                    </button>
                    <div className="view_options">
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">View more</a>
                      </div>
                      <div className="options">
                        <img src={group} />
                        <a href="#">Reschedule</a>
                      </div>
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">Cancel</a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button id="view_more">View More</button>
                </td>
              </tr>

              <tr>
                <td>
                  12/9 /2021 <br />
                  10:00 AM
                </td>
                <td>Sarah Nair</td>
                <td>
                  <div className="single_line">
                    <img src={maya} />
                    <div className="single_line_content">
                      <span className="single_weight">Dr. Maya </span>
                      <br /> General Practitioner
                    </div>
                  </div>
                </td>
                <td>
                  <button className="confirmed">
                    <span>
                      <img src={confirmed} />
                    </span>
                    Confirmed
                  </button>
                </td>
                <td>Online</td>
                <td>
                  <div className="relative_position">
                    <button id="dt_btn" className="view" onClick={viewOptions}>
                      <div class="dots">•••</div>
                    </button>
                    <div className="view_options">
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">View more</a>
                      </div>
                      <div className="options">
                        <img src={group} />
                        <a href="#">Reschedule</a>
                      </div>
                      <div className="options">
                        <img src={external_link} />
                        <a href="#">Cancel</a>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <button id="view_more">View More</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
