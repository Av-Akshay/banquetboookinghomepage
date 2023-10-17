import React from "react";
import "./index.css";

import { Clander, Peoples, Search } from "../../images";

const CenterSection = () => {
  return (
    <div className="center_section">
      <div className="main_Heading">
        <h1 className="heading">
          Find <span className="highlight">Banquet</span> near by <br />
          at best price
        </h1>
        <button className="btn get-start">Get Started!</button>
      </div>
      <div className="banquet_info">
        <div className="about_banquet">
          <p>Badarpur New Delhi</p>
        </div>
        <div className="about_banquet">
          <p>Jan 27-29</p>
          <img src={Clander} alt="time" />
        </div>
        <div className="about_banquet">
          <p>People 500</p>
          <img src={Peoples} alt="peoples" />
        </div>
        <div className="banquet-info-search-button">
          <img src={Search} alt="" />
          <p>Search</p>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
