import * as actionTypes from './../constants/ActionTypes'; 

export const clickOnStartGameButton = () => ({
    type: actionTypes.START_GAME_CLICKED
});

export const clickOnBeginGameButton = () => ({
    type: actionTypes.BEGIN_GAME_CLICKED
});

export const clickOnRadioWhoMoveFirst = (isFirstMovePlayer) => ({
    type: actionTypes.WHO_MOVE_FIRST_CHANGED, payload: isFirstMovePlayer
});