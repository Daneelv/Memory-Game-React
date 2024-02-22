import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => (!disabled ? handleChoice(card) : null);

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <div>
          <img className="front" src={card.src} alt="card front" />
          <img
            className="back"
            src="/img/cover.png"
            onClick={handleClick}
            alt="card back"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
