import React from "react";
import BanquetCommonComponent from "./BanquetCommonComponent";
import {
  Banquet1,
  Banquet2,
  Banquet3,
  Banquet4,
  Banquet5,
  Banquet6,
} from "../images";

const Banquets = () => {
  return (
    <div className="our_top_banquets">
      <div className="top_banquets">
        <h1 className="heading">Our Top Banquets</h1>
        <p>Make your fuction more impressive with Banquet Booking</p>
      </div>
      <div className="banquets_card">
        <BanquetCommonComponent Banquet={Banquet1} name={"Cately Stark"} />
        <BanquetCommonComponent Banquet={Banquet2} name={"Magle Rhee"} />
        <BanquetCommonComponent Banquet={Banquet3} name={"Etep Suretep"} />
        <BanquetCommonComponent Banquet={Banquet4} name={"Cately Stark"} />
        <BanquetCommonComponent Banquet={Banquet5} name={"Magle Rhee"} />
        <BanquetCommonComponent Banquet={Banquet6} name={"Etep Suretep"} />
      </div>
      <div className="find_more_banquet">
        <button className="btn">Find Out More</button>
      </div>
      <hr />
    </div>
  );
};

export default Banquets;
