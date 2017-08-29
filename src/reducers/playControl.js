import {PLAYER_TAKE_CLICKED} from './../constants/ActionTypes';

const initialState = {};

export default function playControl(state = initialState, action){
    if(action.type === PLAYER_TAKE_CLICKED){
        let fullDeck = state;
        let computerCards = [];
        let aiField = [];
        let playerField = [];
        let playerCards = []; 

        return {
            ...state,
            fullDeck: fullDeck,
            computerCards: computerCards,
            aiField: aiField,
            playerField: playerField,
            playerCards: playerCards
        };
    }
    return state;
}