import React from "react";

const Steps = (props) => {
  const { img, icon, order1, order2, classCom } = props;

  return (
    <div className="find_banquet">
      <div className={`item1 ${classCom}`} style={order2}>
        <img src={img} alt="find-Bannquet" />
      </div>
      <div className="banquet_steps item2" style={order1}>
        <div>
          <img className="banquet_step_img" src={icon} alt="search" />
          <h2>Find Banquet</h2>
        </div>
        <p>
          Discover custom for your home or batch formulas for restaurents and
          commercial
        </p>
      </div>
    </div>
  );
};

export default Steps;
