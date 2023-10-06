import React from "react";
import search from "../Assest/Search-Icon.png";

const Menu = () => {
  return (
    <div className="menu">
      <div className="select-cities">
        <select className="select" id="cars">
          <option value="volvo">Banglore</option>
        </select>
        <select className="select" id="cars">
          <option value="volvo">Chennai</option>
        </select>
        <select className="select" id="cars">
          <option value="volvo">Delhi</option>
        </select>
        <select className="select" id="cars">
          <option value="volvo">Gurgaon</option>
        </select>
        <select className="select" id="cars">
          <option value="volvo">Hyderabad</option>
        </select>
        <select className="select" id="cars">
          <option value="volvo">Kolkata</option>
        </select>
        <select className="select" id="cars">
          <option value="volvo">Mumbai</option>
        </select>
        <select className="select" id="cars">
          <option value="volvo">Noida</option>
        </select>
      </div>
      <div className="search">
        <input
          className="search-cities"
          type="text"
          placeholder="search-cities"
        />
        <img className="search-icon" src={search} alt="search-icon" />
      </div>
    </div>
  );
};

export default Menu;
