import React from "react";
import { Growth } from "../images";

const Grow = () => {
  return (
    <div className="growth">
      <div className="banquet_growth">
        <div className="banquet_fasttest_growth">
          <div>
            <h1>World fastest growing BanQuet chain</h1>
            <p>More Destination, More Ease, More Affordable.</p>
          </div>
          <div className="about_growth">
            <div>
              <h1>800+</h1>
              <p>Cities</p>
            </div>
            <div>
              <h1>43000+</h1>
              <p>Exclusive Banquet</p>
            </div>
          </div>
        </div>
        <div>
          <img src={Growth} alt="Growing-img" />
        </div>
      </div>
    </div>
  );
};

export default Grow;
