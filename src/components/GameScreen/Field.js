import React from "react";
import PropTypes from "prop-types";

import InvisibleCard from "./Card/InvisibleCard";
import Card from "./Card/Card";

import { uniqueId } from "lodash-es";

const Field = ({ cards }) => {
  let output = null;

  //Чтобы "не скакала" разметка:
  if (cards.length === 0) {
    output = <InvisibleCard />;
  } else {
    let out_cards = cards.map(el => {
      let randKey = uniqueId();
      return (
        <Card
          key={randKey}
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

export default Field;

Field.propTypes = {
  cards: PropTypes.array.isRequired
};
