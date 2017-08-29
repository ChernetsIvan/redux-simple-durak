import {PREV_BUTTON_CLICKED, NEXT_BUTTON_CLICKED} from './../constants/ActionTypes';

const initialState = {
    playerStartInd:0,
    playerEndInd:9,
};

export default function pagination(state = initialState, action){
    if(action.type === PREV_BUTTON_CLICKED){
        return {
            ...state,
            playerStartInd: state.playerStartInd-1,
            playerEndInd: state.playerEndInd-1
        };
    }
    else if(action.type === NEXT_BUTTON_CLICKED){
        return {
            ...state,
            playerStartInd: state.playerStartInd+1,
            playerEndInd: state.playerEndInd+1
        };
    }
    return state;
}