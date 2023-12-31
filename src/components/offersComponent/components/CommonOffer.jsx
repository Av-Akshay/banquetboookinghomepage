import React from "react";

const CommonOffer = (props) => {
  const { icon, name, background } = props;
  return (
    <div style={background} className="common_offer_card">
      <div className="offer_card">
        <div className="offer_card_img">
          <img src={icon} alt="offer-icon" />
        </div>
        <div className="offer_card_hading">
          <h2>{name}</h2>
          <p>15 Jan,2020</p>
        </div>
      </div>
      <hr />
      <div className="offer_lorem">
        <h2>Creative media helps million business grow</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est
          vel repellendus officia fuga, quo soluta libero omnis, voluptas
        </p>
        <span>
          <button style={background} className="offer_button">
            Read More
          </button>
        </span>
      </div>
    </div>
  );
};

export default CommonOffer;
