import React from "react";
import PropTypes from "prop-types";

import Card from "./Card/Card";
import HiddenCard from "./Card/HiddenCard";

const Deck = ({cards}) => {
    var cardsWithoutLast = [];
    cardsWithoutLast = cards.concat();
    let trumpCard = cardsWithoutLast.pop();

    //1)Козырная карта.
    let output_TrumpCard = null;
    if (trumpCard !== undefined) {
      //"Переопределяем" bootstrap-класс col-6 вместо col-1:
      output_TrumpCard = (
        <Card
          rank={trumpCard.rank}
          suit={trumpCard.suit}
          bootStrapColClass="col-6"
          hidden={false}
        />
      );
    }

    //2)Имитация колоды.
    let output_MockDeck = null;
    let output_CountOfCardsInDeck = null;
    if (cardsWithoutLast.length > 0) {
      output_MockDeck = (
        <HiddenCard bootStrapColClass="col-6" />
      );
      output_CountOfCardsInDeck = cardsWithoutLast.length;
    }

    let output = (
      <div className="container">
        <div className="row">
          {output_TrumpCard}
          {output_MockDeck}
        </div>
        <div className="row">
          <div className="col-6" />
          <div className="col-6">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <b>{output_CountOfCardsInDeck}</b>
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
  cards: PropTypes.array
};
