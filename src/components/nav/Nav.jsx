import React from "react";
import { Banquet, Call, Working } from "../../images";
import "../nav/index.css";

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className="image_div">
          <img
            className="banquet_logo"
            src={Banquet}
            alt="BanquetBooking-Logo.png"
          />
        </div>
        <div className="Call-Working">
          <div className="common_style_nav">
            <img src={Call} alt="Call-us" />
            <div className="call_us">
              <h2>Call US:-(+84) 123456789</h2>
              <p>E-mail:-support@Banquetbooking.com</p>
            </div>
          </div>
          <div className="common_style_nav">
            <img src={Working} alt=" Call-us" />
            <div className="working_hour">
              <h2>Working Hours</h2>
              <p>Mon-Sun (8.00am-12.00am)</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
