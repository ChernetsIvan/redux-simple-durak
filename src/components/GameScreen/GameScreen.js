import React, { Component } from "react";
import PropTypes from "prop-types";

//Компонент-представление
import Field from "./Field";

//Компоненты-контейнеры
import StatusContainer from "./../../containers/GameScreen/StatusContainer";
import AIContainer from "./../../containers/GameScreen/AIContainer";
import DeckContainer from "./../../containers/GameScreen/DeckContainer";
import PlayerContainer from "./../../containers/GameScreen/Player/PlayerContainer";

class GameScreen extends Component {
  render() {
    return (
      <div>
        <div className="container  my-1">
          <div className="row justify-content-between">
            <div className="col-auto">
              <button
                className="btn btn-secondary mr-3"
                onClick={this.props.onBeginGameClick}
              >
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
                <Field cards={this.props.aiField} />
                <Field cards={this.props.playerField} />
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
  }
}

export default GameScreen;

GameScreen.propTypes = {
  onBeginGameClick: PropTypes.func.isRequired,
  aiField: PropTypes.array.isRequired,
  playerField: PropTypes.array.isRequired
};