import React from "react";
import PropTypes from "prop-types";

import Card from "./Card/Card";
import HiddenCard from "./Card/HiddenCard";

const Deck = ({cards}) => {
    let cardsWithoutLast = [];
    cardsWithoutLast = cards.concat();
    const trumpCard = cardsWithoutLast.pop();

    // 1)Козырная карта.
    let outputTrumpCard = null;
    if (trumpCard !== undefined) {
      // "Переопределяем" bootstrap-класс col-6 вместо col-1:
      outputTrumpCard = (
        <Card
          rank={trumpCard.rank}
          suit={trumpCard.suit}
          bootStrapColClass="col-6"
          hidden={false}
        />
      );
    }

    // 2)Имитация колоды.
    let outputMockDeck = null;
    let outputCountOfCardsInDeck = null;
    if (cardsWithoutLast.length > 0) {
      outputMockDeck = (
        <HiddenCard bootStrapColClass="col-6" />
      );
      outputCountOfCardsInDeck = cardsWithoutLast.length;
    }

    const output = (
      <div className="container">
        <div className="row">
          {outputTrumpCard}
          {outputMockDeck}
        </div>
        <div className="row">
          <div className="col-6" />
          <div className="col-6">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <b>{outputCountOfCardsInDeck}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    return output;
};

export default Deck;

Deck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};
