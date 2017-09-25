import * as actionTypes from "./../constants/ActionTypes";

const initialState = {
  playerWins: 0,
  aiWins: 0,
  draws: 0
};

export default function statistics(state = initialState, action) {
  if (action.type === actionTypes.GAME_OVER_AI_WIN) {
    return {
      ...state,
      aiWins: state.aiWins++
    };
  } else if (action.type === actionTypes.GAME_OVER_PLAYER_WIN) {
    return {
      ...state,
      playerWins: state.playerWins++
    };
  } else if (action.type === actionTypes.GAME_OVER_WITH_DRAW) {
    return {
      ...state,
      draws: state.draws++
    };
  }
  return state;
}
