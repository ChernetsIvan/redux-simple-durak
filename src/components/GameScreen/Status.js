import React from "react";
import PropTypes from "prop-types";
import { statusMessages } from "./../../constants/GameConstants";
import * as gameModes from "./../../constants/GameModes";

export const Status = ({
  gameMode,
  computerCards,
  fullDeck,
  onPlayerWin,
  onAiWin,
  onTheDraw
}) => {
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
      onPlayerWin();
      break;
    }
    case gameModes.AIWin: {
      outText = statusMessages.PlayerLose;
      onAiWin();
      break;
    }
    case gameModes.TheDraw: {
      outText = statusMessages.GameResultDraw;
      onTheDraw();
      break;
    }
    default: {
      outText = null;
    }
  }

  if (computerCards.length === 0 && fullDeck.length > 0) {
    outText = statusMessages.NoCardsAI;
  }

  let out = null;
  if (outText !== null) {
    let dash = <span>&mdash;</span>;
    out = (
      <span>
        {dash} {outText}
      </span>
    );
  }

  return (
    <div className="col-auto">
      <h3 className="mt-2">{out}</h3>
    </div>
  );
};

Status.propTypes = {
  gameMode: PropTypes.string.isRequired,
  computerCards: PropTypes.array.isRequired,
  fullDeck: PropTypes.array.isRequired,
  onPlayerWin: PropTypes.func.isRequired,
  onAiWin: PropTypes.func.isRequired,
  onTheDraw: PropTypes.func.isRequired
};
