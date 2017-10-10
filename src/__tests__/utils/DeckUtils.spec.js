import DeckUtils from "./../../utils/DeckUtils";

describe("Test of sortInputDeckByPower-method", () => {
  test("with sorting in descending order", () => {
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
      }
    ];
    DeckUtils.sortInputDeckByPower(testCards, false);
    
    expect(testCards[0].power).toEqual(3);
  });
});
