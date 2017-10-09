import game from "./../../reducers/game";
import * as actionTypes from "./../../constants/ActionTypes";
import * as gameModes from "./../../constants/GameModes";
import DeckUtils from "./../../utils/DeckUtils";

describe("Test of game funtion", () => {
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
    const trumpSuit = { suit: "Ч" };
    const cards = DeckUtils.fillCards(trumpSuit);

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
});
