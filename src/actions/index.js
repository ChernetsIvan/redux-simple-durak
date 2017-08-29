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


export const clickOnPrev = () => ({
    type: actionTypes.PREV_BUTTON_CLICKED
});

export const clickOnNext = () => ({
    type: actionTypes.NEXT_BUTTON_CLICKED
});


export const clickOnPlayerTake = () => ({
    type: actionTypes.PLAYER_TAKE_CLICKED
})