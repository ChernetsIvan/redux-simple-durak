import PlayerActionsHandler from "./../../utils/PlayerActionsHandler";
import * as gameModes from "./../../constants/GameModes";
import DeckUtils from "./../../utils/DeckUtils";

describe("PlayerActionsHandler handleClickOnCard method test", () => {
  const trumpSuit = { suit: "Ч" };
  const cards = DeckUtils.fillCards(trumpSuit);
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
      suit: { suit: "Ч" },
      power: 60
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
});
