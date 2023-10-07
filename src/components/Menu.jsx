import React from "react";
import { Search } from "../images";

const Menu = () => {
  return (
    <div className="menu">
      <div className="select-cities">
        <select className="select" id="cars">
          <option value="Banglore">Banglore</option>
        </select>
        <select className="select" id="cars">
          <option value="Chennai">Chennai</option>
        </select>
        <select className="select" id="cars">
          <option value="Delhi">Delhi</option>
        </select>
        <select className="select" id="cars">
          <option value="Gurgaon">Gurgaon</option>
        </select>
        <select className="select" id="cars">
          <option value="Hyderabad">Hyderabad</option>
        </select>
        <select className="select" id="cars">
          <option value="Kolkata">Kolkata</option>
        </select>
        <select className="select" id="cars">
          <option value="Mumbai">Mumbai</option>
        </select>
        <select className="select" id="cars">
          <option value="Noida">Noida</option>
        </select>
      </div>
      <div className="search">
        <input
          className="search-cities"
          type="text"
          placeholder="search-cities"
        />
        <img className="search-icon" src={Search} alt="search-icon" />
      </div>
    </div>
  );
};

export default Menu;
