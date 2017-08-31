import * as actionTypes from './../constants/ActionTypes';

import * as gameModes from './../constants/GameModes';

import DeckUtils from './../utils/DeckUtils';
import AiActions from './../utils/AiActions';
import PlayerActionsHandler from './../utils/PlayerActionsHandler';
import FieldsUtils from './../utils/FieldsUtils';

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
    gameMode: gameModes.PlayerAttack,
    playerStartInd:0,
    playerEndInd:9,
};

export default function game(state = initialState, action){

    if(action.type === actionTypes.START_GAME_CLICKED){

        let fullDeck = [], computerCards = [], aiField = [], playerField = [], playerCards = []; 
        let trumpSuit, gameMode;
        
        //Вызов именно в таком порядке!  
        trumpSuit = DeckUtils.chooseSuitForTrumpCardInFuture();
        fullDeck = DeckUtils.fillCards(trumpSuit);          
        fullDeck = DeckUtils.shuffle(fullDeck); 
        DeckUtils.moveAnyCardWithTrumpSuitToTailOfFullDeck(trumpSuit, fullDeck);
        DeckUtils.giveUpToSixCards(fullDeck, computerCards);
        DeckUtils.giveUpToSixCards(fullDeck, playerCards);
        DeckUtils.sortInputDeckByPower(playerCards, true);   
        
        if(state.isFirstMovePlayer){
            gameMode = gameModes.PlayerAttack;
        }else{            
            gameMode = gameModes.AiAttack;
            //"Заставляем" AI сделать ход:
            gameMode = AiActions.makeAi_Attack_Move(
                gameMode, computerCards, aiField, playerField, fullDeck, playerCards);
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

    else if(action.type === actionTypes.BEGIN_GAME_CLICKED){
        return {
            ...state,
            isRenderSettingsForStartNewGame: true
        }
    }

    else if(action.type === actionTypes.WHO_MOVE_FIRST_CHANGED){
        return {
            ...state,
            isFirstMovePlayer: action.payload
        }
    }

    else if(action.type === actionTypes.PREV_BUTTON_CLICKED){
        return {
            ...state,
            playerStartInd: state.playerStartInd-1,
            playerEndInd: state.playerEndInd-1
        };
    }

    else if(action.type === actionTypes.NEXT_BUTTON_CLICKED){
        return {
            ...state,
            playerStartInd: state.playerStartInd+1,
            playerEndInd: state.playerEndInd+1
        };
    }

    else if(action.type === actionTypes.PLAYER_TAKE_CLICKED || 
            action.type === actionTypes.AI_TAKE_CLICKED ||
            action.type === actionTypes.REMOVE_CARDS_CLICKED ||
            action.type === actionTypes.SOME_PLAYERS_CARD_CLICKED){

        let fullDeck = [], computerCards = [], aiField = [], playerField = [], playerCards = [];
        fullDeck = state.fullDeck.concat();
        computerCards = state.computerCards.concat();
        aiField = state.aiField.concat();
        playerField = state.playerField.concat();
        playerCards = state.playerCards.concat();
        let gameMode = state.gameMode;
        
        switch(action.type){
            case actionTypes.PLAYER_TAKE_CLICKED: {
                gameMode = PlayerActionsHandler.handleClickOnTakeButton(
                    playerField, playerCards, aiField, fullDeck, computerCards, gameMode);
                break;
            }
            case actionTypes.AI_TAKE_CLICKED: {
                gameMode = PlayerActionsHandler.handleClickOnAiTakeButton(
                    playerField, computerCards, aiField, fullDeck, playerCards, gameMode);
                break;
            }
            case actionTypes.REMOVE_CARDS_CLICKED: {
                FieldsUtils.removeCardsFromFieldsAndGiveCards(
                    true, aiField, playerField, fullDeck, playerCards, computerCards);
                gameMode = gameModes.AiAttack;
                gameMode = AiActions.makeAi_Attack_Move(
                    gameMode, computerCards, aiField, playerField, fullDeck, playerCards);
                break;
            }
            case actionTypes.SOME_PLAYERS_CARD_CLICKED: {
                gameMode = PlayerActionsHandler.handleClickOnCard(
                    action.payload, playerCards, gameMode, playerField, 
                    aiField, state.trumpSuit, fullDeck, computerCards);
                break;
            }
            default: {
                break;
            }
        }       

        return {
            ...state,
            fullDeck: fullDeck,
            computerCards: computerCards,
            aiField: aiField,
            playerField: playerField,
            playerCards: playerCards,
            gameMode: gameMode
        };
    }
    return state;
}