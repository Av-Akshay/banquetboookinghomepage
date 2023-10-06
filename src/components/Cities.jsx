import React from "react";
import Banglore from "../assest/Banglore.png";
import Delhi from "../assest/Delhi.png";
import Hydrabaad from "../assest/Hyderabad.png";
import Gurgaon from "../assest/Gurgaon.png";
import Chennai from "../assest/Chennai.png";

const Cities = () => {
  return (
    <div className="cities">
      <img src={Banglore} alt="Banglore" />
      <img src={Chennai} alt="Chennai" />
      <img src={Delhi} alt="Delhi" />
      <img src={Gurgaon} alt="Gurgaon" />
      <img src={Hydrabaad} alt="Hydrabaad" />
    </div>
  );
};

export default Cities;
