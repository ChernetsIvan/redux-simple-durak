import * as actions from "./../../actions/index";

describe("Testing of action creators:", () => {
  test("Test of clickOnStartGameButton-action", () => {
    const action = actions.clickOnStartGameButton();
    expect(action).toEqual({
      type: "START_GAME_CLICKED"
    });
  });
  
  test("Test of clickOnBeginGameButton-action", () => {
    const action = actions.clickOnBeginGameButton();
    expect(action).toEqual({
      type: "BEGIN_GAME_CLICKED"
    });
  });

  test("Test of clickOnRadioWhoMoveFirst-action", () => {
    const action = actions.clickOnRadioWhoMoveFirst(true);
    expect(action).toEqual({
      type: "WHO_MOVE_FIRST_CHANGED",
      payload: true
    });
  });

  test("Test of clickOnCard-action", () => {
    const action = actions.clickOnCard(5);
    expect(action).toEqual({
      type: "SOME_PLAYERS_CARD_CLICKED",
      payload: 5
    });
  });

  test("Test of clickOnPlayerTake-action", () => {
    const action = actions.clickOnPlayerTake();
    expect(action).toEqual({
      type: "PLAYER_TAKE_CLICKED"
    });
  });

  test("Test of clickOnAiTake-action", () => {
    const action = actions.clickOnAiTake();
    expect(action).toEqual({
      type: "AI_TAKE_CLICKED"
    });
  });

  test("Test of clickOnRemoveCards-action", () => {
    const action = actions.clickOnRemoveCards();
    expect(action).toEqual({
      type: "REMOVE_CARDS_CLICKED"
    });
  });

  test("Test of gameOver-action", () => {
    const action = actions.gameOver("test");
    expect(action).toEqual({
      type: "GAME_OVER",
      payload: "test"
    });
  });

});
