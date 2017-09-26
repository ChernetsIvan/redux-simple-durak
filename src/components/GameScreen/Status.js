import React from "react";
import PropTypes from "prop-types";
import { statusMessages } from "./../../constants/GameConstants";
import * as gameModes from "./../../constants/GameModes";

export const Status = ({ gameMode }) => {
  let outText = null;
  switch (gameMode) {
    case gameModes.PlayerAttack:
    case gameModes.AiDefence: {
      outText = statusMessages.PlayerAttack;
      break;
    }
    case gameModes.PlayerDefence:
    case gameModes.AiAttack: {
      outText = statusMessages.PlayerDefence;
      break;
    }
    case gameModes.PlayerDiscard: {
      outText = statusMessages.PlayerDiscard;
      break;
    }

    case gameModes.PlayerWin: {
      outText = statusMessages.PlayerWin;
      break;
    }
    case gameModes.AIWin: {
      outText = statusMessages.PlayerLose;
      break;
    }
    case gameModes.TheDraw: {
      outText = statusMessages.GameResultDraw;
      break;
    }

    case gameModes.NoCardsAI: {
      outText = statusMessages.NoCardsAI;
      break;
    }
    default: {
      outText = null;
    }
  }

  let dash = <span>&mdash;</span>;
  return (
    <div className="col-auto">
      <h3 className="mt-2">{dash} {outText}</h3>
    </div>
  );
};

Status.propTypes = {
  gameMode: PropTypes.string.isRequired
};
