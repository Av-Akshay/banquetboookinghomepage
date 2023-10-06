import React from "react";
import Steps from "./Steps";
import {
  FindBaquet,
  FindSearch,
  Booking,
  BookingIcon,
  Enjoy,
  EnjoyIcon,
} from "../images";

const FindAndEnjoyBanquet = () => {
  const order1 = { order: 1 };
  const order2 = { order: 2 };
  return (
    <div className="Steps">
      <h1 className="heading">Simple Steps</h1>
      <div className="simple_steps">
        <Steps img={FindBaquet} icon={FindSearch} />
        <Steps
          img={Booking}
          icon={BookingIcon}
          order1={order1}
          order2={order2}
        />
        <Steps img={Enjoy} icon={EnjoyIcon} />
      </div>
    </div>
  );
};

export default FindAndEnjoyBanquet;
