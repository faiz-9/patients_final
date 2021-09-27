import React from "react";
import signuplogo from "./images/signup_logo.png";
import Common from "./common_signup/Common";
import "./passwordresetted.css";

const PasswordResetted = () => {
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
            <p>
              We’ve sent password reset link to change password to
              <span style={{ color: "#d44b5d" }}> random@email.com</span>
            </p>

            <div className="signup_form">
              <button>Okay</button>
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

export default PasswordResetted;
