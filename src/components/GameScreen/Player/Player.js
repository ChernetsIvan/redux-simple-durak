import React from "react";
import PropTypes from "prop-types";
import { uniqueId } from "lodash-es";

import { InvisibleCard } from "./../Card/InvisibleCard";
import Card from "./../Card/Card";

//Классы-контейнеры кнопок
import PlayerTakeButtonContainer from "./../../../containers/GameScreen/Player/Buttons/PlayerTakeButtonContainer";
import AiTakeButtonContainer from "./../../../containers/GameScreen/Player/Buttons/AiTakeButtonContainer";
import RemoveCardsButtonContainer from "./../../../containers/GameScreen/Player/Buttons/RemoveCardsButtonContainer";
import ShowStatisticsLinkContainer from "./../../../containers/GameScreen/Player/ShowStatisticsLinkContainer";

import { PrevButton } from "./Buttons/PrevButton";
import { NextButton } from "./Buttons/NextButton";

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.onPrevClick = this.onPrevClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);

    this.state = {
      startInd: 0,
      endInd: 9
    };
  }

  onPrevClick() {
    this.setState(prevState => ({
      startInd: prevState.startInd - 1,
      endInd: prevState.endInd - 1
    }));
  }

  onNextClick() {
    this.setState(prevState => ({
      startInd: prevState.startInd + 1,
      endInd: prevState.endInd + 1
    }));
  }

  render() {
    let output = null;
    if (this.props.cards.length > 0) {
      //Показ кнопок Prev и Next
      let out_PrevButton = (
        <PrevButton
          startInd={this.state.startInd}
          cards={this.props.cards}
          onPrevClick={this.onPrevClick}
        />
      );
      let out_NextButton = (
        <NextButton
          endInd={this.state.endInd}
          cards={this.props.cards}
          onNextClick={this.onNextClick}
        />
      );

      //Выводим максимум 10 карт: от startInd до endInd
      let cards = this.props.cards.map(el => {
        let randKey = uniqueId();
        return (
          <Card
            key={randKey}
            id={el.id}
            rank={el.rank}
            suit={el.suit}
            onCardClick={this.props.onCardClick}
            bootStrapColClass="col-1"
          />
        );
      });
      let outCards = [];
      if (this.props.cards.length > 10) {
        outCards = cards.slice(this.state.startInd, this.state.endInd + 1);
      } else {
        outCards = cards;
      }

      output = (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-1 align-self-center">{out_PrevButton}</div>
            {outCards}
            <div className="col-1 align-self-center">{out_NextButton}</div>
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
        <div className="row justify-content-center">
          <div className="col-auto">
            <RemoveCardsButtonContainer />
            <AiTakeButtonContainer />
            <PlayerTakeButtonContainer />
            <ShowStatisticsLinkContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;

Player.propTypes = {
  cards: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired
};
