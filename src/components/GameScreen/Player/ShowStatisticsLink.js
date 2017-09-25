import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

import * as gameModes from "./../../../constants/GameModes";

class ShowStatisticsLink extends React.Component {
  render() {
    let dash = <span>&mdash;</span>;
    let link = null;
    if (
      this.props.gameMode === gameModes.AIWin ||
      this.props.gameMode === gameModes.PlayerWin ||
      this.props.gameMode === gameModes.TheDraw
    ) {
      link = (
        <Link
          to="/statistics"
          className="btn btn-secondary ml-2"
        >
          {dash} Показать статистику!
        </Link>
      );
    }
    return link;
  }
}

export default ShowStatisticsLink;

ShowStatisticsLink.propTypes = {
  gameMode: PropTypes.string.isRequired
};
