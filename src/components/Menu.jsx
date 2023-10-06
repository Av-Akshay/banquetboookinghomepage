import React from "react";
import banquet from "../Assest/BanquetBooking-Logo.png";
import call from "../Assest/Phone.png";
import Working from "../Assest/Working-Hours.png";

const Menu = () => {
  return (
    <div className="menu">
      <img src={banquet} alt="BanquetBooking-Logo.png" />
      <div className="Call-Working">
        <div className="common-style-menu">
          <img src={call} alt=" Call-us" />
          <div>
            <h2>Call US: 123456789</h2>
            <p>E-mail support@Banquetbooking.com</p>
          </div>
        </div>
        <div className="common-style-menu">
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

export default Menu;
