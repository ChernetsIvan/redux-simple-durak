import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";

import * as gameModes from "./../../../constants/GameModes";

const ShowStatisticsLink = ({ gameMode }) => {
  let dash = <span>&mdash;</span>;
  return gameMode === gameModes.AIWin ||
  gameMode === gameModes.PlayerWin ||
  gameMode === gameModes.TheDraw ? (
    <Link
      to="/statistics"
      className="btn btn-secondary ml-2"
    >
      {dash} Игра закончена, смотреть статистику!
    </Link>
  ) : null;
};

export default ShowStatisticsLink;

ShowStatisticsLink.propTypes = {
  gameMode: PropTypes.string.isRequired
};
