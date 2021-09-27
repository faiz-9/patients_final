import React from "react";
import signupimg from "../images/signup_img.png";
// import signuplogo from "../images/signup_logo.png";

import "./common.css";

const Common = (props) => {
  return (
    <div className="signup_wrapper">
      <div className="signup_container">
        <div className="signup_left_image">
          <img src={signupimg} />
        </div>

        <div className="signup_right_content">
          <div className="signup_logo">
            <img src={props.image} />
          </div>

          {props.title ? props.title : ""}

          {props.content}
          {/* <div className="signup_form">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Mobile Number" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Enter Password" />
            <input type="text" placeholder="Date of Birth" />
            <input type="text" placeholder="Male or Female" />
            <div className="whatsapp_status">
              <p>Whatsapp Updates</p>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <button>Continue</button>
            <p className="already">
              Already have an account? <span>Login</span>
            </p>

            <p className="signup_last_para">
              By continuing you agree to the to our
              <span className="href">
                <a href="#">Terms of use and Privacy policy</a>
              </span>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Common;
