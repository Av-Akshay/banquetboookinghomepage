import React from "react";
import BanquetCommonComponent from "./BanquetCommonComponent";
import {
  BanquetOne,
  BanquetTwo,
  BanquetThree,
  BanquetFour,
  BanquetFive,
  BanquetSix,
} from "../images";

const Banquets = () => {
  return (
    <div className="our_top_banquets">
      <div className="top_banquets">
        <h1 className="heading">Our Top Banquets</h1>
        <p>Make your fuction more impressive with Banquet Booking</p>
      </div>
      <div className="banquets_card">
        <BanquetCommonComponent Banquet={BanquetOne} name={"Cately Stark"} />
        <BanquetCommonComponent Banquet={BanquetTwo} name={"Magle Rhee"} />
        <BanquetCommonComponent Banquet={BanquetThree} name={"Etep Suretep"} />
        <BanquetCommonComponent Banquet={BanquetFour} name={"Cately Stark"} />
        <BanquetCommonComponent Banquet={BanquetFive} name={"Magle Rhee"} />
        <BanquetCommonComponent Banquet={BanquetSix} name={"Etep Suretep"} />
      </div>
      <div className="find_more_banquet">
        <button className="btn">Find Out More</button>
      </div>
      <hr />
    </div>
  );
};

export default Banquets;
