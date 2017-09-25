import React from "react";
import PropTypes from "prop-types";

export const PrevButton = props => {
  let out = null;
  if (props.startInd > 0 && props.cards.length > 10) {
    out = (
      <button onClick={props.onPrevClick} className="btn btn-info">
        <b>&larr;{props.startInd}</b>
      </button>
    );
  }
  return out;
};

PrevButton.propTypes = {
  startInd: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
  onPrevClick: PropTypes.func.isRequired
};
