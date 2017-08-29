import {START_GAME_CLICKED, BEGIN_GAME_CLICKED, WHO_MOVE_FIRST_CHANGED} from './../constants/ActionTypes';

import * as gameModes from './../constants/GameModes';

import DeckUtils from './../utils/DeckUtils';
import AiActions from './../utils/AiActions';

const initialState = {
    isRenderSettingsForStartNewGame: true,
    trumpSuit: {},
    fullDeck: [],
    computerCards: [],
    aiField: [],
    playerField: [],
    playerCards: [],
    firstStart: true,
    isFirstMovePlayer: true,
    gameMode: gameModes.PlayerAttack
};

export default function startGame(state = initialState, action){
    if(action.type === START_GAME_CLICKED){

        let fullDeck = [], computerCards = [], aiField = [], playerField = [], playerCards = []; 
        let trumpSuit, gameMode;
        
        //Вызов именно в таком порядке!  
        trumpSuit = DeckUtils.chooseSuitForTrumpCardInFuture();
        fullDeck = DeckUtils.fillCards(trumpSuit);          
        fullDeck = DeckUtils.shuffle(fullDeck); 
        DeckUtils.moveAnyCardWithTrumpSuitToTailOfFullDeck(trumpSuit, fullDeck);
        DeckUtils.giveUpToSixCards(fullDeck, computerCards);
        DeckUtils.giveUpToSixCards(fullDeck,playerCards);
        DeckUtils.sortInputDeckByPower(playerCards, true);   
        
        if(state.isFirstMovePlayer){
            //Первым ходит Игрок:
            gameMode = gameModes.PlayerAttack;
        }else{
            //Первым ходит AI:
            gameMode = gameModes.AiAttack;
            // AiActions.makeAi_Attack_Move(gameMode, GameMode, computerCards, 
            //     aiField, isFieldContainSuchCard, fullDeck, removeCardsFromTableAndGiveCards);
        }

        return {
            ...state,
            isRenderSettingsForStartNewGame: false,
            trumpSuit: trumpSuit,
            fullDeck: fullDeck,
            computerCards: computerCards,
            aiField: aiField,
            playerField: playerField,
            playerCards: playerCards,
            playerStartInd: 0,
            playerEndInd: 9,
            firstStart: false,
            gameMode: gameMode
        }
    }
    else if(action.type === BEGIN_GAME_CLICKED){
        return {
            ...state,
            isRenderSettingsForStartNewGame: true
        }
    }
    else if(action.type === WHO_MOVE_FIRST_CHANGED){
        return {
            ...state,
            isFirstMovePlayer: action.payload
        }
    }
    return state;
}