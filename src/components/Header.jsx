import React from "react";
import facebook from "../assest/Facebook.png";
import twitter from "../assest/Twitter.png";
import insta from "../assest/Instagram.png";
import googlePlus from "../assest/Google-Plus.png";
import login from "../assest/Login.png";
import register from "../assest/Register.png";
import member from "../assest/Become-Member.png";

const Header = () => {
  return (
    <div className="head">
      <div className="social">
        <img src={facebook} alt="Facebook" />
        <img src={twitter} alt="twitter" />
        <img src={googlePlus} alt="Google" />
        <img src={insta} alt="Instagram" />
      </div>
      <div className="log-In">
        <div className="sign-up">
          <img src={login} alt="logIn" />
          <p>Log In</p>
        </div>
        <div className="sign-up">
          <img src={register} alt="Register" />
          <p>Register Now</p>
        </div>
        <div className="sign-up">
          <img src={member} alt="Register" />
          <p>Become Member</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
