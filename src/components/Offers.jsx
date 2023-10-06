import React from "react";
import FirstOffer from "./FirstOffer";
import CommonOffer from "./CommonOffer";
import { OfferImg } from "../images";

const Offers = () => {
  const bg_color1 = { backgroundColor: "#ffd700" };
  const bg_color2 = { backgroundColor: "rgb(24, 165, 130)", color: "#fff" };

  return (
    <div className="offers">
      <h1>Offers For You</h1>
      <div className="offers_for_you">
        <FirstOffer />
        <CommonOffer
          icon={OfferImg}
          name={"Paul Scholes"}
          // border={boder1}
          background={bg_color1}
        />
        <CommonOffer
          // border={boder2}
          icon={OfferImg}
          name={"Hary Cane"}
          background={bg_color2}
        />
      </div>
    </div>
  );
};

export default Offers;
