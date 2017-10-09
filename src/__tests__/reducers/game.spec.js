import game from "./../../reducers/game";
import * as actionTypes from "./../../constants/ActionTypes";
import * as gameModes from "./../../constants/GameModes";
import DeckUtils from "./../../utils/DeckUtils";

describe("Test of game funtion", () => {
  const trumpSuit = { suit: "Ч" };
  const cards = DeckUtils.fillCards(trumpSuit);

  test("should return the initial state", () => {
    expect(game(undefined, {})).toEqual({
      showStartScreen: true,
      trumpSuit: {},
      fullDeck: [],
      aiCards: [],
      aiField: [],
      playerField: [],
      playerCards: [],
      isPlayerMoveFirst: true,
      gameMode: gameModes.PlayerAttack
    });
  });

  test("should handle PLAYER_TAKE_CLICKED-action", () => {
    const initialState = {
      showStartScreen: true,
      trumpSuit,
      fullDeck: [],
      aiCards: [],
      aiField: cards.slice(0, 5),
      playerField: cards.slice(0, 5),
      playerCards: [],
      isPlayerMoveFirst: true,
      gameMode: gameModes.AiAttack
    };

    const newState = game(initialState, {
      type: actionTypes.PLAYER_TAKE_CLICKED
    });

    expect(newState.playerCards.length).toEqual(10);
    expect(newState.aiField.length).toEqual(0);
    expect(newState.playerField.length).toEqual(0);
  });

  test("should handle SOME_PLAYERS_CARD_CLICKED-action", () => {
    const initialState = {
      showStartScreen: true,
      trumpSuit,
      fullDeck: [],
      aiCards: [],
      aiField: [],
      playerField: [],
      playerCards: cards.slice(0, 5),
      isPlayerMoveFirst: true,
      gameMode: gameModes.AiAttack
    };

    const newState = game(initialState, {
      type: actionTypes.SOME_PLAYERS_CARD_CLICKED,
      payload: 1
    });

    expect(newState.gameMode).toEqual(gameModes.AIWin);
  });

  test("don't should handle unknown actions", () => {
    const initialState = {
      showStartScreen: true,
      trumpSuit,
      fullDeck: [],
      aiCards: [],
      aiField: [],
      playerField: [],
      playerCards: [],
      isPlayerMoveFirst: true,
      gameMode: gameModes.AiAttack
    };

    const newState = game(initialState, {
      type: "SOMETHING_WRONG"
    });

    expect(newState).toEqual(initialState);
  });

  test("should handle REMOVE_CARDS_CLICKED-action", () => {
    const initialState = {
      showStartScreen: true,
      trumpSuit,
      fullDeck: [],
      aiCards: [],
      aiField: cards.slice(0, 5),
      playerField: cards.slice(0, 5),
      playerCards: [],
      isPlayerMoveFirst: true,
      gameMode: gameModes.AiAttack
    };

    const newState = game(initialState, {
      type: actionTypes.REMOVE_CARDS_CLICKED
    });

    expect(newState.gameMode).toEqual(gameModes.TheDraw);
  });

  test("should handle AI_TAKE_CLICKED-action", () => {
    const initialState = {
      showStartScreen: true,
      trumpSuit,
      fullDeck: [],
      aiCards: [],
      aiField: cards.slice(0, 5),
      playerField: cards.slice(0, 5),
      playerCards: [],
      isPlayerMoveFirst: true,
      gameMode: gameModes.AiAttack
    };

    const newState = game(initialState, {
      type: actionTypes.AI_TAKE_CLICKED
    });

    expect(newState.gameMode).toEqual(gameModes.PlayerWin);
    expect(newState.aiCards.length).toEqual(10);
  });

  test("should handle START_GAME_CLICKED-action with PlayerMoveFirst=TRUE", () => {
    const initialState = {
      showStartScreen: true,
      trumpSuit,
      fullDeck: [],
      aiCards: [],
      aiField: [],
      playerField: [],
      playerCards: [],
      isPlayerMoveFirst: true,
      gameMode: gameModes.AiAttack
    };

    const newState = game(initialState, {
      type: actionTypes.START_GAME_CLICKED
    });

    expect(newState.gameMode).toEqual(gameModes.PlayerAttack);
    expect(newState.aiCards.length).toEqual(6);
    expect(newState.playerCards.length).toEqual(6);
  });

  test("should handle START_GAME_CLICKED-action with PlayerMoveFirst=FALSE", () => {
    const initialState = {
      showStartScreen: true,
      trumpSuit,
      fullDeck: [],
      aiCards: [],
      aiField: cards.slice(0, 5),
      playerField: cards.slice(0, 5),
      playerCards: [],
      isPlayerMoveFirst: false,
      gameMode: gameModes.PlayerAttack
    };

    const newState = game(initialState, {
      type: actionTypes.START_GAME_CLICKED
    });

    expect(newState.gameMode).toEqual(gameModes.PlayerDefence);
    expect(newState.aiCards.length).toEqual(5);
    expect(newState.playerCards.length).toEqual(6);
    expect(newState.aiField.length).toEqual(1);
  });

  test("should analyze game result", () => {
    const initialState = {
      showStartScreen: true,
      trumpSuit,
      fullDeck: cards,
      aiCards: [],
      aiField: cards.slice(0, 5),
      playerField: cards.slice(0, 5),
      playerCards: [],
      isPlayerMoveFirst: false,
      gameMode: gameModes.PlayerAttack
    };

    const newState = game(initialState, {
      type: actionTypes.AI_TAKE_CLICKED
    });

    expect(newState.gameMode).toEqual(gameModes.PlayerAttack);
    expect(newState.aiField.length).toEqual(0);
    expect(newState.playerField.length).toEqual(0);
    expect(newState.aiCards.length).toEqual(10);
  });

});
