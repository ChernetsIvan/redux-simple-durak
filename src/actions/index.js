import * as actionTypes from "./../constants/ActionTypes";

export const clickOnStartGameButton = () => ({
  type: actionTypes.START_GAME_CLICKED
});
export const clickOnBeginGameButton = () => ({
  type: actionTypes.BEGIN_GAME_CLICKED
});
export const clickOnRadioWhoMoveFirst = isFirstMovePlayer => ({
  type: actionTypes.WHO_MOVE_FIRST_CHANGED,
  payload: isFirstMovePlayer
});

export const clickOnCard = cardId => ({
  type: actionTypes.SOME_PLAYERS_CARD_CLICKED,
  payload: cardId
});

export const clickOnPlayerTake = () => ({
  type: actionTypes.PLAYER_TAKE_CLICKED
});
export const clickOnAiTake = () => ({
  type: actionTypes.AI_TAKE_CLICKED
});
export const clickOnRemoveCards = () => ({
  type: actionTypes.REMOVE_CARDS_CLICKED
});

export const playerWin = () => ({
  type: actionTypes.GAME_OVER_PLAYER_WIN
});
export const aiWin = () => ({
  type: actionTypes.GAME_OVER_AI_WIN
});
export const theDraw = () => ({
  type: actionTypes.GAME_OVER_WITH_DRAW
});