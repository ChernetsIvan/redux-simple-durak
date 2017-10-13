import React, { Component } from "react";
import ServerAPi from "./../../utils/ServerAPI";

const PLAYERS_DISPLAY_LIMIT = 25;

class CurrentPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availablePlayers: [],
      currentPlayer: "Select player"
    };

    ServerAPi.getPlayers(players => {
      this.setState({
        availablePlayers: players.slice(0, PLAYERS_DISPLAY_LIMIT)
      });
    });
  }

  handleItemClick(id) {}

  render() {
    const players = this.state.availablePlayers.map((playerName, id) => {
      return (
        <a key={id} className="dropdown-item" onClick={this.handleItemClick}>
          {playerName}
        </a>
      );
    });

    return (
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {this.state.currentPlayer}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {players}
        </div>
      </div>
    );
  }
}

export default CurrentPlayer;
