import PlayerActionsHandler from "./../../utils/PlayerActionsHandler";
import * as gameModes from "./../../constants/GameModes";

describe("PlayerActionsHandler handleClickOnCard method test", () => {
  const trumpSuit = { suit: "Ч" };
  const testCards = [
    {
      id: 10,
      rank: { text: "6", cardValue: 1 },
      suit: { suit: "Б" },
      power: 1
    },
    {
      id: 4,
      rank: { text: "7", cardValue: 2 },
      suit: { suit: "Б" },
      power: 2
    },
    {
      id: 23,
      rank: { text: "8", cardValue: 3 },
      suit: { suit: "К" },
      power: 3
    },
    {
      id: 5,
      rank: { text: "9", cardValue: 4 },
      suit: { suit: "Б" },
      power: 4
    },
    {
      id: 6,
      rank: { text: "10", cardValue: 5 },
      suit: { suit: "К" },
      power: 5
    },
    {
      id: 7,
      rank: { text: "10", cardValue: 5 },
      suit: { suit: "Ч" },
      power: 50
    },
    {
      id: 8,
      rank: { text: "В", cardValue: 6 },
      suit: { suit: "Б" },
      power: 60
    },
    {
      id:9,
      rank: { text: "7", cardValue: 2 },
      suit: { suit: "К" },
      power: 2
    }
  ];

  test("should return empty string, if playerCards.length=0 || aiCards.length=0", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      0,
      [],
      gameModes.AiAttack,
      [],
      [],
      trumpSuit,
      [],
      []
    );
    expect(result).toEqual("");
  });

  test("should return recieved gameMode, if playerCards.length>0 && aiCards.length>0, but recieved cardId is incorrect", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      5,
      [testCards[0]],
      gameModes.AiAttack,
      [],
      [],
      trumpSuit,
      [],
      [testCards[1]]
    );
    expect(result).toEqual(gameModes.AiAttack);
  });

  test("should return recieved gameMode, if playerCards.length>0 && aiCards.length>0, cardId is correct, but incorrect gameMode", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      10,
      [testCards[0]],
      gameModes.AiDefence,
      [],
      [],
      trumpSuit,
      [],
      [testCards[1]]
    );
    expect(result).toEqual(gameModes.AiDefence);
  });

  test("should return recieved gameMode, if playerCards.length>0 && aiCards.length>0, cardId is correct, gameMode=PlayerAttack, but playerField.length>0 and fields do not contain such card", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      10,
      [testCards[0]],
      gameModes.PlayerAttack,
      [testCards[2]],
      [],
      trumpSuit,
      [],
      [testCards[1]]
    );
    expect(result).toEqual(gameModes.PlayerAttack);
  });

  test("should return PlayerDiscard, if playerCards.length>0 && aiCards.length>0, cardId is correct, gameMode=PlayerAttack, playerField.length=0", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      4,
      [testCards[1]],
      gameModes.PlayerAttack,
      [],
      [],
      trumpSuit,
      [],
      [testCards[0]]
    );
    expect(result).toEqual(gameModes.PlayerDiscard);
  });

  test("should return PlayerDiscard, if playerCards.length>0 && aiCards.length>0, cardId is correct, gameMode=PlayerAttack, playerField.length>0 and fields contain such card", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      4,
      [testCards[1]],
      gameModes.PlayerAttack,
      [testCards[7]],
      [],
      trumpSuit,
      [],
      [testCards[0]]
    );
    expect(result).toEqual(gameModes.PlayerDiscard);
  });

  test("should return PlayerDefence, if playerCards.length>0 && aiCards.length>0, cardId is correct, gameMode=PlayerDefence, selectedCard.power < aiField.lastCard.power", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      4,
      [testCards[1]],
      gameModes.PlayerDefence,
      [],
      [testCards[2]],
      trumpSuit,
      [],
      [testCards[0]]
    );
    expect(result).toEqual(gameModes.PlayerDefence);
  });

  test("should return PlayerDefence, if playerCards.length>0 && aiCards.length>0, cardId is correct, gameMode=PlayerDefence, selectedCard.power > aiField.lastCard.power, but not correct suit and not trump suit", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      23,
      [testCards[2]],
      gameModes.PlayerDefence,
      [],
      [testCards[1]],
      trumpSuit,
      [],
      [testCards[0]]
    );
    expect(result).toEqual(gameModes.PlayerDefence);
  });

  test("should return empty string, if playerCards.length>0 && aiCards.length>0, cardId is correct, gameMode=PlayerDefence, selectedCard.power > aiField.lastCard.power, correct suit and not trump suit", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      4,
      [testCards[1]],
      gameModes.PlayerDefence,
      [],
      [testCards[0]],
      trumpSuit,
      [],
      [testCards[2]]
    );
    expect(result).toEqual("");
  });

  test("should return empty string, if playerCards.length>0 && aiCards.length>0, cardId is correct, gameMode=PlayerDefence, selectedCard.power > aiField.lastCard.power, not correct suit but trump suit", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      7,
      [testCards[5]],
      gameModes.PlayerDefence,
      [],
      [testCards[0]],
      trumpSuit,
      [],
      [testCards[2]]
    );
    expect(result).toEqual("");
  });

  test("should return PlayerDiscard if playerCards.length>0 && aiCards.length>0, cardId is correct, gameMode=PlayerDiscard, and fields do not contain such card", () => {
    const result = PlayerActionsHandler.handleClickOnCard(
      4,
      [testCards[1]],
      gameModes.PlayerDiscard,
      [],
      [testCards[0]],
      trumpSuit,
      [],
      [testCards[2]]
    );
    expect(result).toEqual(gameModes.PlayerDiscard);
  });

  test("should return PlayerDiscard, if playerCards.length>0 && aiCards.length>0, cardId is correct, gameMode=PlayerDiscard, and fields contain such card", () => {    
    const playerCards = [testCards[1]];
    const playerField = [];
    const result = PlayerActionsHandler.handleClickOnCard(
      4,
      playerCards,
      gameModes.PlayerDiscard,
      playerField,
      [testCards[7]],
      trumpSuit,
      [],
      [testCards[2]]
    );
    expect(result).toEqual(gameModes.PlayerDiscard);
    expect(playerField.length).toEqual(1);
    expect(playerCards.length).toEqual(0);
  });
});
