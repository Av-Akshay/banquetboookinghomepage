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
  const pink = " pink_heading";
  const yellow = "yellow_heading";
  const green = "green_heading";
  return (
    <div className="our_top_banquets">
      <div className="top_banquets">
        <h1 className="heading">Our Top Banquets</h1>
        <p>Make your fuction more impressive with Banquet Booking</p>
      </div>
      <div className="banquets_card">
        <BanquetCommonComponent
          Banquet={BanquetOne}
          name={"Cately Stark"}
          heading={pink}
        />
        <BanquetCommonComponent
          Banquet={BanquetTwo}
          name={"Magle Rhee"}
          heading={yellow}
        />
        <BanquetCommonComponent
          Banquet={BanquetThree}
          name={"Etep Suretep"}
          heading={green}
        />
        <BanquetCommonComponent
          Banquet={BanquetFour}
          name={"Cately Stark"}
          heading={pink}
        />
        <BanquetCommonComponent
          Banquet={BanquetFive}
          name={"Magle Rhee"}
          heading={yellow}
        />
        <BanquetCommonComponent
          Banquet={BanquetSix}
          name={"Etep Suretep"}
          heading={green}
        />
      </div>
      <div className="find_more_banquet">
        <button className="btn">Find Out More</button>
      </div>
      <hr />
    </div>
  );
};

export default Banquets;
