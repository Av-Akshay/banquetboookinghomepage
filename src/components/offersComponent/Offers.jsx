import React from "react";
import FirstOffer from "./components/FirstOffer";
import CommonOffer from "./components/CommonOffer";
import { OfferImg } from "../../images";
import "./offer.css";

const Offers = () => {
  const bg_color1 = { backgroundColor: "#fca510" };
  const bg_color2 = { backgroundColor: "rgb(4 171 195)", color: "#fff" };

  return (
    <div className="offers">
      <div className="offer_heading">
        <h1>Offers For You</h1>
      </div>
      <div className="offers_for_you">
        <FirstOffer />
        <CommonOffer
          icon={OfferImg}
          name={"Paul Scholes"}
          background={bg_color1}
        />
        <CommonOffer
          icon={OfferImg}
          name={"Hary Cane"}
          background={bg_color2}
        />
      </div>
    </div>
  );
};

export default Offers;
