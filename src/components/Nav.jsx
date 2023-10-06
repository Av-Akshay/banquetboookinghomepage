import React from "react";
import banquet from "../assest/BanquetBooking-Logo.png";
import call from "../assest/Phone.png";
import Working from "../assest/Working-Hours.png";

const Nav = () => {
  return (
    <div className="nav">
      <img
        className="banquet-logo"
        src={banquet}
        alt="BanquetBooking-Logo.png"
      />
      <div className="Call-Working">
        <div className="common-style-nav">
          <img src={call} alt=" Call-us" />
          <div>
            <h2>Call US: 123456789</h2>
            <p>E-mail support@Banquetbooking.com</p>
          </div>
        </div>
        <div className="common-style-nav">
          <img src={Working} alt=" Call-us" />
          <div>
            <h2>Working Hours</h2>
            <p>Mon-Sun (8.00am-12.00am)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
