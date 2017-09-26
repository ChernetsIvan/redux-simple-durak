import React from "react";
import PropTypes from "prop-types";

export const PrevButton = ({startInd, cards, onPrevClick}) => {
  let out = null;
  if (startInd > 0 && cards.length > 10) {
    out = (
      <button onClick={onPrevClick} className="btn btn-info">
        <b>&larr;{startInd}</b>
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
