import {START_GAME_CLICKED, BEGIN_GAME_CLICKED, WHO_MOVE_FIRST_CHANGED} from './../constants/ActionTypes';
import {cardRanks, cardSuits} from './../constants/GameConstants';
import * as gameModes from './../constants/GameModes';

import DeckUtils from './../utils/DeckUtils';
import AiActions from './../utils/AiActions';

import CardModel from './../models/CardModel';

const initialState = {
    isRenderSettingsForStartNewGame: true,
    trumpSuit: {},
    fullDeck: [],
    computerCards: [],
    aiField: [],
    playerField: [],
    playerCards: [],
    playerStartInd:0,
    playerEndInd:9,
    firstStart: true,
    isFirstMovePlayer: true,
    gameMode: gameModes.PlayerAttack
};

export default function startGame(state = initialState, action){
    if(action.type === START_GAME_CLICKED){

        let fullDeck = [];
        let computerCards = [];
        let aiField = [];
        let playerField = [];
        let playerCards = []; 
        let gameMode;

        let trumpSuit = DeckUtils.chooseSuitForTrumpCardInFuture(cardSuits);

        //Наполняем колоду картами
        //На ходу устанавливаем power для каждой карты по принципу:
        //козырь->10*rank.cardValue, НЕкозырь->1*rank.cardValue
        let z = 0;
        let power, coef;               
        cardSuits.forEach(function(element,index, array){
            if(element.suit === trumpSuit.suit){
                coef = 10;
            }else{
                coef = 1;
            }
            cardRanks.forEach(function(element2, index2, array2){
                power = coef * element2.cardValue;
                fullDeck.push(
                    new CardModel(z, element2, element, power)
                );
                z++;
            });
        });
        
        //Вызов этих и выше методов именно в таком порядке!    
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