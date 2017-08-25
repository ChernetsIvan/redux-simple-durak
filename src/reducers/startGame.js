import {START_GAME_CLICKED, BEGIN_GAME_CLICKED} from './../constants/ActionTypes';

const initialState = {
    isRenderSettingsForStartNewGame: true
};

export default function startGame(state = initialState, action){
    if(action.type === START_GAME_CLICKED){
        return {
            ...state,
            isRenderSettingsForStartNewGame: false
        }
    }
    else if(action.type === BEGIN_GAME_CLICKED){
        return {
            ...state,
            isRenderSettingsForStartNewGame: true
        }
    }
    return state;
}