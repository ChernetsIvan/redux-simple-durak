import {START_GAME_CLICKED, BEGIN_GAME_CLICKED} from './../constants/ActionTypes';
import {cardRanks, cardSuits} from './../constants/GameConstants';

const initialState = {
    isRenderSettingsForStartNewGame: true,
    fullDeck: [],
    computerCards: [],
    aiField: [],
    playerField: [],
    playerCards: []
};

export default function startGame(state = initialState, action){
    if(action.type === START_GAME_CLICKED){
        return {
            ...state,
            isRenderSettingsForStartNewGame: false,
            fullDeck: [1,2],
            computerCards: [4,5],
            aiField: [1,3],
            playerField: [4,5,56,76],
            playerCards: [112,1,34,5,5]
        }
    }
    else if(action.type === BEGIN_GAME_CLICKED){



        return {
            ...state,
            isRenderSettingsForStartNewGame: true,
            fullDeck: [],
            computerCards: [],
            aiField: [],
            playerField: [],
            playerCards: []
        }
    }
    return state;
}