import React from "react";
import { Heart, Comment } from "../images";

const BanquetCommonComponent = (props) => {
  const { Banquet, name, heading } = props;

  return (
    <div className="common_card">
      <div>
        <img src={Banquet} alt="banquet" />
      </div>
      <div className="rating">
        <div className="banquet_Rating">
          <img src={Heart} alt="heart" />
          <p>12</p>
        </div>
        <div className="banquet_Rating">
          <img src={Comment} alt="comment" />
          <p>5</p>
        </div>
      </div>
      <div className="sub_card">
        <p className="sub_card_heading">
          Post by <span className="sub_card_highlight">{name}</span>
        </p>
        <div className="sub_card_flex">
          <div>
            <h2>Indian Banquet</h2>
            <p className={heading}>Light Meal</p>
          </div>
          <p>
            Spicy combination of beef,
            <br />
            beans and tomato sauce
          </p>
          <p>view Details</p>
        </div>
      </div>
    </div>
  );
};

export default BanquetCommonComponent;
