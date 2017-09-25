import React from "react";
import PropTypes from "prop-types";

export const NextButton = props => {
  let out = null;
  if (props.endInd < props.cards.length - 1 && props.cards.length > 10) {
    out = (
      <button onClick={props.onNextClick} className="btn btn-info">
        <b>{props.cards.length - 1 - props.endInd}&rarr;</b>
      </button>
    );
  }
  return out;
};

NextButton.propTypes = {
  endInd: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  onNextClick: PropTypes.func.isRequired
};
