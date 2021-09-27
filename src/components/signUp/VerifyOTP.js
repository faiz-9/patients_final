import React from "react";
import signuplogo from "./images/signup_logo.png";
import Common from "./common_signup/Common";
import "./verifyotp.css";
const VerifyOTP = () => {
  return (
    <>
      <Common
        image={signuplogo}
        title={
          <div className="welcome_heading">
            <p>Welcome Back</p>
          </div>
        }
        content={
          <div className="otp_wrapper">
            <p>
              Enter the OTP send to you for authentication to your mobile number
              +91 92xxxxxx48
            </p>

            <div className="received_otp">
              <p>Verify OTP</p>
              <div className="otp_boxes">
                <input type="text" className="otpbox" />
                <input type="text" className="otpbox" />
                <input type="text" className="otpbox" />
                <input type="text" className="otpbox" />
                <input type="text" className="otpbox" />
              </div>
            </div>

            <div className="resend_otp">
              <a href="#" style={{ color: "#d44b5d", margin: "7px 0" }}>
                Resend OTP?
              </a>
            </div>

            <div className="verify_button">
              <button>Verify</button>
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

export default VerifyOTP;
