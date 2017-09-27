import React from "react";
import PropTypes from "prop-types";

//Компонент-представление
import { Field } from "./Field";

//Компоненты-контейнеры
import StatusContainer from "./../../containers/GameScreen/StatusContainer";
import AIContainer from "./../../containers/GameScreen/AIContainer";
import DeckContainer from "./../../containers/GameScreen/DeckContainer";
import PlayerContainer from "./../../containers/GameScreen/Player/PlayerContainer";

import * as gameModes from "./../../constants/GameModes";

export const GameScreen = ({
  onBeginGameClick,
  aiField,
  playerField,
  gameMode
}) => {
  let classAttr = "btn btn-secondary mr-3";
  if (
    gameMode === gameModes.AIWin ||
    gameMode === gameModes.PlayerWin ||
    gameMode === gameModes.TheDraw
  ) {
    classAttr += " invisible";
  }

  return (
    <div>
      <div className="container  my-1">
        <div className="row justify-content-between">
          <div className="col-auto">
            <button className={classAttr} onClick={onBeginGameClick}>
              Новая игра
            </button>
          </div>
          <StatusContainer />
          <div className="col-2" />
        </div>
      </div>
      <div>
        <AIContainer />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10">
              <Field cards={aiField} />
              <Field cards={playerField} />
            </div>
            <div className="col-2">
              <DeckContainer />
            </div>
          </div>
        </div>
        <PlayerContainer />
      </div>
    </div>
  );
};

GameScreen.propTypes = {
  onBeginGameClick: PropTypes.func.isRequired,
  aiField: PropTypes.array.isRequired,
  playerField: PropTypes.array.isRequired,
  gameMode: PropTypes.string.isRequired
};
