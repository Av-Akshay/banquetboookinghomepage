import React from "react";

import { Banglore, Delhi, Hydrabaad, Gurgaon, Chennai } from "../images";

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
