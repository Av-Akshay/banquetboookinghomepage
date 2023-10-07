import React from "react";
import {
  Facebook,
  Twitter,
  Insta,
  GooglePlus,
  Login,
  Register,
  Member,
} from "../images";

const Header = () => {
  return (
    <div className="head">
      <div className="social">
        <img src={Facebook} alt="Facebook" />
        <img src={Twitter} alt="twitter" />
        <img src={GooglePlus} alt="Google" />
        <img src={Insta} alt="Instagram" />
      </div>
      <div className="log-In">
        <div className="sign-up">
          <img src={Login} alt="logIn" />
          <p>Log In</p>
        </div>
        <div className="sign-up">
          <img src={Register} alt="Register" />
          <p>Register Now</p>
        </div>
        <div className="sign-up">
          <img src={Member} alt="Register" />
          <p>Become Member</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
