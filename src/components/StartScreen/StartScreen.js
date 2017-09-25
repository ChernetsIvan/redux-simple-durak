import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

class StartScreen extends Component {
  constructor(props) {
    super(props);

    this.onPlayerRadioClick = this.onPlayerRadioClick.bind(this);
    this.onAiRadioClick = this.onAiRadioClick.bind(this);
  }

  onPlayerRadioClick() {
    this.props.onChangeRadio(true);
  }

  onAiRadioClick() {
    this.props.onChangeRadio(false);
  }

  render() {
    let dash = <span>&mdash;</span>;
    return (
      <div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-auto">
              <h1 className="display-2">Карточная игра</h1>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-auto">
              <h1 className="display-3">"Простой дурак"</h1>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-auto">
              <span className="mr-4">
                <b>Первым ходит:</b>
              </span>
              <span className="mr-2">
                <input
                  type="radio"
                  name="PlayerFirst"
                  className=""
                  checked={this.props.isFirstMovePlayer}
                  onChange={this.onPlayerRadioClick}
                />
                <span className="ml-2">Игрок</span>
              </span>
              <span className="mr-2">
                <input
                  type="radio"
                  name="AiFirst"
                  checked={!this.props.isFirstMovePlayer}
                  onChange={this.onAiRadioClick}
                />
                <span className="ml-2">Компьютер</span>
              </span>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-auto">
              <button
                className="btn btn-secondary mr-3"
                onClick={this.props.onClickStartGame}
              >
                {dash} Поехали!
              </button>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-auto">
              <Link to="/statistics">Статистика игр</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartScreen;

StartScreen.propTypes = {
  isFirstMovePlayer: PropTypes.bool.isRequired,
  onClickStartGame: PropTypes.func.isRequired,
  onChangeRadio: PropTypes.func.isRequired
};
