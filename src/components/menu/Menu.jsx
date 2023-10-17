import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Search } from "../../images";
import "./menu.css";

const Menu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="menu_section">
      <div className="menu">
        <div className="hidden_div">
          <button className="toggle_menu">
            <AiOutlineMenu
              onClick={() => {
                toggle ? setToggle(false) : setToggle(true);
              }}
            />
          </button>
          {toggle ? (
            <div className="toggle">
              <div className="box">
                <div className="flex_box">
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
              </div>
            </div>
          ) : null}
        </div>
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
          <div className="input_search">
            <input
              className="search-cities"
              type="text"
              placeholder="search-cities"
            />
            <div className="search_img">
              <img className="search-icon" src={Search} alt="search-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
