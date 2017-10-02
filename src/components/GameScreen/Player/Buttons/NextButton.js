import React from "react";
import PropTypes from "prop-types";

const NextButton = ({endInd, cards, onNextClick}) => {
  let out = null;
  if (endInd < cards.length - 1 && cards.length > 10) {
    out = (
      <button onClick={onNextClick} className="btn btn-info">
        <b>{cards.length - 1 - endInd}&rarr;</b>
      </button>
    );
  }
  return out;
};

export default NextButton;

NextButton.propTypes = {
  endInd: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onNextClick: PropTypes.func.isRequired
};
