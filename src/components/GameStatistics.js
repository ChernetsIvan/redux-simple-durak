import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

import StartScreenContainer from "./../containers/StartScreen/StartScreenContainer";
import GameScreenContainer from "./../containers/GameScreen/GameScreenContainer";

export const GameStatistics = props => {
  return (
    <div className="container">
      <div className="row justify-content-center mb-3 mt-5">
        <div className="col-auto">
          <h2>Статистика</h2>
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-6">
          <h4 className="text-right">Побед:</h4>
          <h4 className="text-right">Ничьих:</h4>
          <h4 className="text-right">Поражений:</h4>
          <h4 className="text-right">Всего сыграно, игр:</h4>
        </div>
        <div className="col-6">
          <h4>{props.playerWins}</h4>
          <h4>{props.draws}</h4>
          <h4>{props.aiWins}</h4>
          <h4>
            {props.playerWins + props.aiWins + props.draws}
          </h4>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto">
          <Link to="/" onClick={props.onBeginGameClick}>
            Новая игра
          </Link>
        </div>
      </div>
    </div>
  );
};

GameStatistics.propTypes = {
  playerWins: PropTypes.number.isRequired,
  aiWins: PropTypes.number.isRequired,
  draws: PropTypes.number.isRequired,
  onBeginGameClick: PropTypes.func.isRequired
};

export default GameStatistics;
