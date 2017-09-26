import React from "react";
import PropTypes from "prop-types";

import { InvisibleCard } from "./Card/InvisibleCard";
import Card from "./Card/Card";

export const Field = ({ cards }) => {
  let output = null;

  //Чтобы "не скакала" разметка:
  if (cards.length === 0) {
    output = <InvisibleCard />;
  } else {
    let out_cards = cards.map(el => {
      return (
        <Card
          key={el.id}
          rank={el.rank}
          suit={el.suit}
          bootStrapColClass={"col-1"}
        />
      );
    });
    output = (
      <div className="container">
        <div className="row">{out_cards}</div>
      </div>
    );
  }
  return output;
};

Field.propTypes = {
  cards: PropTypes.array.isRequired
};
