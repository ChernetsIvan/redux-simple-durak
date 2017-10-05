import React from "react";
import PropTypes from "prop-types";

import { uniqueId } from "lodash-es";

import InvisibleCard from "./Card/InvisibleCard";
import Card from "./Card/Card";

const Field = ({ cards }) => {
  let output = null;

  // Чтобы "не скакала" разметка:
  if (cards.length === 0) {
    output = <InvisibleCard />;
  } else {
    const outCards = cards.map(el => {
      const key = `${el.suit.suit}${el.rank.text}`;
      return (
        <Card
          key={key}
          rank={el.rank}
          suit={el.suit}
          bootStrapColClass={"col-1"}
        />
      );
    });
    output = (
      <div className="container">
        <div className="row">{outCards}</div>
      </div>
    );
  }
  return output;
};

export default Field;

Field.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired
};
