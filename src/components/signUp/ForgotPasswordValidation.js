import React from "react";
// import signuplogo from "./images/signup_logo.png";
import mera_clinic from "../../images/MERA_CLINIC.png";
import Common from "./common_signup/Common";
import "./forgotpasswordvalidation.css";

const ForgotPasswordValidation = () => {
  return (
    <>
      <Common
        image={mera_clinic}
        title={
          <div className="welcome_heading">
            <p>Welcome</p>
          </div>
        }
        content={
          <div className="forgotpasswordvalidation_wrapper">
            <p className="fgt">Forgot Password? Enter Email or Mobile number</p>

            <div className="signup_form">
              <input type="text" id="fgpv" placeholder="Email/ Mobile Number" />
              <button>Continue</button>
            </div>

            <p className="signup_last_para">
              By continuing you agree to the to our
              <span className="href">
                <a href="#">Terms of use and Privacy policy</a>
              </span>
            </p>
          </div>
        }
      />
    </>
  );
};

export default ForgotPasswordValidation;
