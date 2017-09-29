import * as actionTypes from "./../constants/ActionTypes";

import * as gameModes from "./../constants/GameModes";

import DeckUtils from "./../utils/DeckUtils";
import AiActions from "./../utils/AiActions";
import PlayerActionsHandler from "./../utils/PlayerActionsHandler";
import FieldsUtils from "./../utils/FieldsUtils";
import { analyze } from "./../utils/GameStatusAnalyzer";

const initialState = {
  showStartScreen: true,
  trumpSuit: {},
  fullDeck: [],
  aiCards: [],
  aiField: [],
  playerField: [],
  playerCards: [],
  isPlayerMoveFirst: true,
  gameMode: gameModes.PlayerAttack
};

export default function game(state = initialState, action) {
  if (action.type === actionTypes.START_GAME_CLICKED) {
    let fullDeck = [],
      aiCards = [],
      aiField = [],
      playerField = [],
      playerCards = [];
    let trumpSuit, gameMode;

    //Вызов именно в таком порядке!
    trumpSuit = DeckUtils.chooseSuitForTrumpCardInFuture();
    fullDeck = DeckUtils.fillCards(trumpSuit);
    fullDeck = DeckUtils.shuffle(fullDeck);
    DeckUtils.moveAnyCardWithTrumpSuitToTailOfFullDeck(trumpSuit, fullDeck);
    DeckUtils.giveUpToSixCards(fullDeck, aiCards);
    DeckUtils.giveUpToSixCards(fullDeck, playerCards);
    DeckUtils.sortInputDeckByPower(playerCards, true);

    if (state.isPlayerMoveFirst) {
      gameMode = gameModes.PlayerAttack;
    } else {
      gameMode = gameModes.AiAttack;
      //"Заставляем" AI сделать ход:
      gameMode = AiActions.makeAi_Attack_Move(
        gameMode,
        aiCards,
        aiField,
        playerField,
        fullDeck,
        playerCards
      );
    }

    return {
      ...state,
      showStartScreen: false,
      trumpSuit: trumpSuit,
      fullDeck: fullDeck,
      aiCards: aiCards,
      aiField: aiField,
      playerField: playerField,
      playerCards: playerCards,
      gameMode: gameMode
    };
  } else if (action.type === actionTypes.BEGIN_GAME_CLICKED) {
    return {
      ...state,
      showStartScreen: true
    };
  } else if (action.type === actionTypes.WHO_MOVE_FIRST_CHANGED) {
    return {
      ...state,
      isPlayerMoveFirst: action.payload
    };
  } else if (
    action.type === actionTypes.PLAYER_TAKE_CLICKED ||
    action.type === actionTypes.AI_TAKE_CLICKED ||
    action.type === actionTypes.REMOVE_CARDS_CLICKED ||
    action.type === actionTypes.SOME_PLAYERS_CARD_CLICKED
  ) {
    let fullDeck = [],
      aiCards = [],
      aiField = [],
      playerField = [],
      playerCards = [];
    fullDeck = state.fullDeck.concat();
    aiCards = state.aiCards.concat();
    aiField = state.aiField.concat();
    playerField = state.playerField.concat();
    playerCards = state.playerCards.concat();
    let gameMode = state.gameMode;

    switch (action.type) {
      case actionTypes.PLAYER_TAKE_CLICKED: {
        gameMode = PlayerActionsHandler.handleClickOnTakeButton(
          playerField,
          playerCards,
          aiField,
          fullDeck,
          aiCards,
          gameMode
        );
        break;
      }
      case actionTypes.AI_TAKE_CLICKED: {
        gameMode = PlayerActionsHandler.handleClickOnAiTakeButton(
          playerField,
          aiCards,
          aiField,
          fullDeck,
          playerCards,
          gameMode
        );
        break;
      }
      case actionTypes.REMOVE_CARDS_CLICKED: {
        FieldsUtils.removeCardsFromFieldsAndGiveCards(
          true,
          aiField,
          playerField,
          fullDeck,
          playerCards,
          aiCards
        );
        gameMode = gameModes.AiAttack;
        gameMode = AiActions.makeAi_Attack_Move(
          gameMode,
          aiCards,
          aiField,
          playerField,
          fullDeck,
          playerCards
        );
        break;
      }
      case actionTypes.SOME_PLAYERS_CARD_CLICKED: {
        gameMode = PlayerActionsHandler.handleClickOnCard(
          action.payload,
          playerCards,
          gameMode,
          playerField,
          aiField,
          state.trumpSuit,
          fullDeck,
          aiCards
        );
        break;
      }
      default: {
        break;
      }
    }

    let gameResult = analyze(aiCards, playerCards, fullDeck);
    if (gameResult !== "") {
      gameMode = gameResult;
    }

    return {
      ...state,
      fullDeck: fullDeck,
      aiCards: aiCards,
      aiField: aiField,
      playerField: playerField,
      playerCards: playerCards,
      gameMode: gameMode
    };
  }
  return state;
}
