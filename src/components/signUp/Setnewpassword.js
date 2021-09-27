import React from "react";
import signuplogo from "./images/signup_logo.png";
import Common from "./common_signup/Common";
import "./setnewpassword.css";

const Setnewpassword = () => {
  return (
    <>
      <Common
        image={signuplogo}
        title={
          <div className="welcome_heading">
            <p>Welcome</p>
          </div>
        }
        content={
          <div className="pwd_reset_wrapper">
            <p>Set New Password</p>

            <div className="signup_form">
              <input type="password" placeholder="New Password" />
              <input type="password" placeholder="Confirm Password" />
              <button>Continue</button>
            </div>

            <p className="signup_last_para">
              By continuing you agree to the to our
              <span className="href">
                <a href="#"> Terms of use and Privacy policy</a>
              </span>
            </p>
          </div>
        }
      />
    </>
  );
};

export default Setnewpassword;
