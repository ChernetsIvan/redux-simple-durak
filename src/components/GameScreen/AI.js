import React from "react";
import PropTypes from "prop-types";
import { uniqueId } from "lodash-es";

import InvisibleCard from "./Card/InvisibleCard";
import HiddenCard from "./Card/HiddenCard";

const AI = ({ cards }) => {
  let output = null;
  if (cards.length > 0) {
    let inputCards = [];
    inputCards = cards.concat();
    let countOfCardsThatNotShown = 0; // сколько карт не видно
    let outCountOfCardsThatNotShown = null;
    // Выводим только первые 9 рубашкой кверху карт
    while (inputCards.length > 9) {
      inputCards.pop();
      countOfCardsThatNotShown += 1;
      outCountOfCardsThatNotShown = <b>+{countOfCardsThatNotShown}</b>;
    }

    const outputCards = inputCards.map(() => {
      const randKey = uniqueId();
      return <HiddenCard key={randKey} bootStrapColClass="col-1 ml-3" />;
    });

    output = (
      <div className="container mt-1">
        <div className="row justify-content-center">
          {outputCards}
          <div className="col-1 align-self-center">
            {outCountOfCardsThatNotShown}
          </div>
        </div>
      </div>
    );
  } else {
    output = <InvisibleCard />;
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-1" />
        <div className="col-10">{output}</div>
        <div className="col-1" />
      </div>
    </div>
  );
};

export default AI;

AI.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};
