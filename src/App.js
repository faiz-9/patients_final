import React, { Profiler } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ForgotPassword from "./components/forgot_password/ForgotPassword";
import Profile from "./components/profile/Profile";
import CreateProfile from "./components/profile/profile_create/Create_profile";
import Signup from "./components/signUp/Signup";
import SignIn from "./components/signUp/SignIn";
import VerifyOTP from "./components/signUp/VerifyOTP";
import ForgotPasswordValidation from "./components/signUp/ForgotPasswordValidation";
import PasswordResetted from "./components/signUp/PasswordResetted";
import Setnewpassword from "./components/signUp/Setnewpassword";
import Prescription from "./components/patient_side/prescription_table/Prescription";
import Appointment from "./components/patient_side/appointment_table/Appointment";
import BasicDetails from "./components/patient_side/basic_details/BasicDetails";

import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={ForgotPassword} />

          <Route exact path="/profile" component={Profile} />
          <Route exact path="/createProfile" component={CreateProfile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/otp" component={VerifyOTP} />
          <Route
            exact
            path="/forgotPassword"
            component={ForgotPasswordValidation}
          />
          <Route exact path="/resetPassword" component={PasswordResetted} />
          <Route exact path="/newPassword" component={Setnewpassword} />
          <Route exact path="/prescription" component={Prescription} />
          <Route exact path="/appointment" component={Appointment} />
        </Switch>
        {/* <Profile />
      <CreateProfile />

      <Signup />


      <SignIn />
      <VerifyOTP />
      <ForgotPasswordValidation />
      <PasswordResetted />
      <Setnewpassword />
      <Prescription />
      <Appointment />
      <BasicDetails /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
