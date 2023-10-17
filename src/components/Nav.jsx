import React from "react";
import { Banquet, Call, Working } from "../images";

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <img
          className="banquet-logo"
          src={Banquet}
          alt="BanquetBooking-Logo.png"
        />
        <div className="Call-Working">
          <div className="common-style-nav">
            <img src={Call} alt=" Call-us" />
            <div>
              <h2>Call US: 123456789</h2>
              <p className="email">E-mail support@Banquetbooking.com</p>
            </div>
          </div>
          <div className="common-style-nav">
            <img src={Working} alt=" Call-us" />
            <div>
              <h2>Working Hours</h2>
              <p className="email">Mon-Sun (8.00am-12.00am)</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
