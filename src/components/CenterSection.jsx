import React from "react";
import clender from "../assest/Time-Icon.png";
import peoples from "../assest/People-Quantity.png";
import search from "../assest/Search-Icon.png";

const CenterSection = () => {
  return (
    <div className="center_section">
      <div className="main_Heading">
        <h1 className="heading">
          Find <span className="highlight">Banquet</span> near by <br />
          at best price
        </h1>
        <button className="btn">Get Started!</button>
      </div>
      <div className="banquet_info">
        <div className="about_banquet">
          <p>Badarpur New Delhi</p>
        </div>
        <div className="about_banquet">
          <p>Jan 27-29</p>
          <img src={clender} alt="time" />
        </div>
        <div className="about_banquet">
          <p>People 500</p>
          <img src={peoples} alt="peoples" />
        </div>
        <div className="banquet-info-search-button">
          <img src={search} alt="" />
          <p>search</p>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
