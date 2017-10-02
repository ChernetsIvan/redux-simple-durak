import React from "react";
import PropTypes from "prop-types";

const PrevButton = ({startInd, cards, onPrevClick}) => {
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

export default PrevButton;

PrevButton.propTypes = {
  startInd: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  onPrevClick: PropTypes.func.isRequired
};
