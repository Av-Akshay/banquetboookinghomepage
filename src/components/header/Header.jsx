import React from "react";
import Register from "../Register";
import "./index.css";
import {
  Facebook,
  Twitter,
  Insta,
  GooglePlus,
  Login,
  RegisterForm,
  Member,
} from "../../images";

const Header = () => {
  return (
    <div className="header">
      <div className="head">
        <div className="social">
          <img src={Facebook} alt="Facebook" />
          <img src={Twitter} alt="twitter" />
          <img src={GooglePlus} alt="Google" />
          <img src={Insta} alt="Instagram" />
        </div>
        <div className="log-In">
          <Register img={Login} reg="Log In" />
          <Register img={RegisterForm} reg="Register" />
          <Register img={Member} reg="Member" />
        </div>
      </div>
    </div>
  );
};

export default Header;
