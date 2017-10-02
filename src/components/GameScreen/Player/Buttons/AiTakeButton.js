import React from "react";
import PropTypes from "prop-types";

import * as gameModes from "./../../../../constants/GameModes";

const AiTakeButton = ({ gameMode, onAiTakeClick }) => {
  let dash = <span>&mdash;</span>;
  return gameMode === gameModes.PlayerDiscard ? (
    <button className="btn btn-success" onClick={onAiTakeClick}>
      {dash} Подбросить нечего, забирай!
    </button>
  ) : null;
};

export default AiTakeButton;

AiTakeButton.propTypes = {
  gameMode: PropTypes.string.isRequired,
  onAiTakeClick: PropTypes.func.isRequired
};
