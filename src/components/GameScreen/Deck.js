import React from "react";
import PropTypes from "prop-types";

import Card from "./Card/Card";

import { uniqueId } from "lodash-es";

class Deck extends React.Component {
  render() {
    //перекопируем массив, дабы не влиять...
    //...на массив cards при pop() после 'отделения' последнего - козыря игры
    var cardsWithoutLast = [];
    cardsWithoutLast = this.props.cards.concat();
    let trumpCard = cardsWithoutLast.pop();

    //1)Козырь.
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

    //2)Колода.
    let output_MockDeck = null;
    let output_CountOfCardsInDeck = null;
    if (cardsWithoutLast.length > 0) {
      let randKey = uniqueId();
      output_MockDeck = (
        <Card key={randKey} bootStrapColClass="col-6" hidden={true} />
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
  }
}

export default Deck;

Deck.propTypes = {
  cards: PropTypes.array
};
