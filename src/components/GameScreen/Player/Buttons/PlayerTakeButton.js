import React from "react";
import PropTypes from "prop-types";

import * as gameModes from "./../../../../constants/GameModes";

export const PlayerTakeButton = ({
  gameMode,
  playerCards,
  onPlayerTakeClick
}) => {
  let dash = <span>&mdash;</span>;
  return (gameMode === gameModes.PlayerDefence ||
    gameMode === gameModes.AiAttack) &&
  playerCards.length > 0 ? (
    <button className="btn btn-danger" onClick={onPlayerTakeClick}>
      {dash} Беру!
    </button>
  ) : null;
};

PlayerTakeButton.propTypes = {
  gameMode: PropTypes.string.isRequired,
  playerCards: PropTypes.array.isRequired,
  onPlayerTakeClick: PropTypes.func.isRequired
};
