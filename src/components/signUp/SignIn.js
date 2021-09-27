import React from "react";
import signuplogo from "./images/signup_logo.png";
import Common from "./common_signup/Common";
import "./signin.css";
const SignIn = () => {
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
          <div className="signup_form">
            <p className="signup_heading">
              Sign in with Email or Mobile Number
            </p>
            <input type="text" placeholder="Email Address/ Mobile Number" />
            <input type="password" placeholder="Password" />

            <div className="forgot_pwd">
              <a href="#">Forgot Password?</a>
            </div>

            <button id="btn1">Sign in</button>
            <button id="btn2">Sign in with OTP</button>
            <p className="already">
              Don't have an account?
              <span>
                <a href="#"> Register</a>
              </span>
            </p>

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

export default SignIn;
