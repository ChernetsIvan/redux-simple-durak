import * as actionTypes from "./../constants/ActionTypes";

import * as gameModes from "./../constants/GameModes";

import DeckUtils from "./../utils/DeckUtils";
import AiActions from "./../utils/AiActions";
import PlayerActionsHandler from "./../utils/PlayerActionsHandler";
import FieldsUtils from "./../utils/FieldsUtils";
import analyze from "./../utils/GameStatusAnalyzer";

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
    let fullDeck = [];
    const aiCards = [];
    const aiField = [];
    const playerField = [];
    const playerCards = [];
    let gameMode;

    // Вызов именно в таком порядке!
    const trumpSuit = DeckUtils.chooseSuitForTrumpCardInFuture();
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
      // "Заставляем" AI сделать ход:
      gameMode = AiActions.makeAiAttackMove(
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
      trumpSuit,
      fullDeck,
      aiCards,
      aiField,
      playerField,
      playerCards,
      gameMode
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
    const fullDeck = state.fullDeck.concat();
    const aiCards = state.aiCards.concat();
    const aiField = state.aiField.concat();
    const playerField = state.playerField.concat();
    const playerCards = state.playerCards.concat();
    let gameMode = state.gameMode;

    switch (action.type) {
      case actionTypes.PLAYER_TAKE_CLICKED: {
        gameMode = PlayerActionsHandler.handleClickOnTakeButton(
          playerField,
          playerCards,
          aiField,
          fullDeck,
          aiCards
        );
        break;
      }
      case actionTypes.AI_TAKE_CLICKED: {
        gameMode = PlayerActionsHandler.handleClickOnAiTakeButton(
          playerField,
          aiCards,
          aiField,
          fullDeck,
          playerCards
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
        gameMode = AiActions.makeAiAttackMove(
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

    const gameResult = analyze(aiCards, playerCards, fullDeck);
    if (gameResult !== "") {
      gameMode = gameResult;
    }

    return {
      ...state,
      fullDeck,
      aiCards,
      aiField,
      playerField,
      playerCards,
      gameMode
    };
  }
  return state;
}
