import * as actionTypes from "./../constants/ActionTypes";
import * as gameModes from "./../constants/GameModes";

const initialState = {
  playerWins: 0,
  aiWins: 0,
  draws: 0
};

export default function statistics(state = initialState, action) {
  if (action.type === actionTypes.GAME_OVER) {
    switch (action.payload) {
      case gameModes.AIWin: {
        return {
          ...state,
          aiWins: state.aiWins + 1
        };
      }
      case gameModes.PlayerWin: {
        return {
          ...state,
          playerWins: state.playerWins + 1
        };
      }
      case gameModes.TheDraw: {
        return {
          ...state,
          draws: state.draws + 1
        };
      }
      default:{
        return state;
      }
    }
  }
  return state;
}
