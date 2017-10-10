import AiActions from "./../../utils/AiActions";
import * as gameModes from "./../../constants/GameModes";
import DeckUtils from "./../../utils/DeckUtils";

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
    suit: { suit: "Ч" },
    power: 60
  }
];

describe("AiActions: makeAiAttackMove and its aiStopAttack and aiContinueAttack methods", () => { 
  const cards = DeckUtils.fillCards(trumpSuit);

  test("aiStopAttack method test", () => {
    const result = AiActions.aiStopAttack(
      gameModes.AiAttack,
      cards.slice(0, 5),
      cards.slice(0, 5),
      cards,
      cards.slice(0, 5),
      cards.slice(0, 5)
    );
    expect(result).toEqual(gameModes.PlayerAttack);
  });

  test("aiContinueAttack method test", () => {
    const aiCards = [testCards[0], testCards[1], testCards[2]];
    const aiField = [];
    const result = AiActions.aiContinueAttack(1, aiField, aiCards);

    expect(aiField.length).toEqual(1);
    expect(aiField[0].id).toEqual(4);
    expect(aiCards.length).toEqual(2);
    expect(result).toEqual(gameModes.PlayerDefence);
  });

  test("makeAiAttackMove should retun empty string if gameMode!=AiAttack", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.PlayerAttack,
      cards.slice(0, 5),
      cards.slice(5, 7),
      cards.slice(7, 10),
      cards.slice(10, 30),
      cards.slice(30, 32)
    );
    expect(result).toEqual("");
  });

  test("makeAiAttackMove should retun empty string if aiCards.length==0 || playerCards.length == 0", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      [],
      cards.slice(5, 7),
      cards.slice(7, 10),
      cards.slice(10, 30),
      []
    );
    expect(result).toEqual("");
  });

  test("makeAiAttackMove should retun 'PlayerDefence' string, when gameMode==AiAttack, aiCards.length!=0 && playerCards.length != 0, aiField.length == 0 ", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      cards.slice(0, 5),
      [],
      cards.slice(7, 10),
      cards.slice(10, 30),
      cards.slice(30, 32)
    );
    expect(result).toEqual(gameModes.PlayerDefence);
  });

  test("makeAiAttackMove should retun 'PlayerDefence' string, when gameMode==AiAttack, aiCards.length!=0 && playerCards.length != 0, aiField.length == 0, cCard.rank.cardValue = aiCards[j].rank.cardValue ", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      cards.slice(0, 5).concat(cards[0]),
      [],
      cards.slice(7, 10),
      cards.slice(10, 30),
      cards.slice(30, 32)
    );
    expect(result).toEqual(gameModes.PlayerDefence);
  });

  test("makeAiAttackMove should retun 'PlayerAttack' string, when gameMode=AiAttack, aiCards.length!=0 && playerCards.length != 0, aiField.length != 0, indexCardWeMayAttack = null ", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      [testCards[1]],
      [testCards[3]],
      [],
      [],
      [testCards[2]]
    );
    expect(result).toEqual(gameModes.PlayerAttack);
  });

  test("makeAiAttackMove should retun 'PlayerDefence' string, when gameMode=AiAttack, aiCards.length!=0 && playerCards.length != 0, aiField.length != 0, indexCardWeMayAttack != null, aiCards[indexCardWeMayAttack].power < 10 ", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      [testCards[1]],
      [testCards[1]],
      [testCards[1]],
      [],
      [testCards[2]]
    );
    expect(result).toEqual(gameModes.PlayerDefence);
  });

  test("makeAiAttackMove should retun 'PlayerDefence' string, when gameMode=AiAttack, aiCards.length!=0 && playerCards.length != 0, aiField.length != 0, indexCardWeMayAttack != null, 50 > aiCards[indexCardWeMayAttack].power >= 10, fullDeck.length <= 5 ", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      [testCards[5]],
      [testCards[5]],
      [testCards[1]],
      [],
      [testCards[2]]
    );
    expect(result).toEqual(gameModes.PlayerDefence);
  });

  test("makeAiAttackMove should retun 'PlayerAttack' string, when gameMode=AiAttack, aiCards.length!=0 && playerCards.length != 0, aiField.length != 0, indexCardWeMayAttack != null, 50 > aiCards[indexCardWeMayAttack].power >= 10, fullDeck.length > 5 ", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      [testCards[5]],
      [testCards[5]],
      [testCards[1]],
      cards.slice(0, 10),
      [testCards[2]]
    );
    expect(result).toEqual(gameModes.PlayerAttack);
  });

  test("makeAiAttackMove should retun 'PlayerAttack' string, when gameMode=AiAttack, aiCards.length!=0 && playerCards.length != 0, aiField.length != 0, indexCardWeMayAttack != null, aiCards[indexCardWeMayAttack].power > 50, fullDeck.length > 0 ", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      [testCards[6]],
      [testCards[6]],
      [testCards[1]],
      cards.slice(0, 10),
      [testCards[2]]
    );
    expect(result).toEqual(gameModes.PlayerAttack);
  });

  test("makeAiAttackMove should retun 'PlayerDefence' string, when gameMode=AiAttack, aiCards.length!=0 && playerCards.length != 0, aiField.length != 0, indexCardWeMayAttack != null, aiCards[indexCardWeMayAttack].power > 50, fullDeck.length = 0, aiCards.length = 1 ", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      [testCards[6]],
      [testCards[6]],
      [testCards[1]],
      [],
      [testCards[2]]
    );
    expect(result).toEqual(gameModes.PlayerDefence);
  });

  test("makeAiAttackMove should retun 'PlayerAttack' string, when gameMode=AiAttack, aiCards.length!=0 && playerCards.length != 0, aiField.length != 0, indexCardWeMayAttack != null, aiCards[indexCardWeMayAttack].power > 50, fullDeck.length = 0, aiCards.length > 1 ", () => {
    const result = AiActions.makeAiAttackMove(
      gameModes.AiAttack,
      [testCards[6], testCards[3]],
      [testCards[6]],
      [testCards[1]],
      [],
      [testCards[2]]
    );
    expect(result).toEqual(gameModes.PlayerAttack);
  });
});

describe("AiActions: makeAiDefenceMove - method", () => {
  test("makeAiDefenceMove should return empty string, if gameModes!=AiDefence", () => {
    const result = AiActions.makeAiDefenceMove(
      gameModes.PlayerAttack,
      [],
      [],
      [],
      {}
    );
    expect(result).toEqual("");
  });

  test("makeAiDefenceMove should return PlayerDiscard string, if gameModes=AiDefence, AI has not cards to beat", () => {
    const result = AiActions.makeAiDefenceMove(
      gameModes.AiDefence,
      [testCards[0]],
      [],
      [],
      {}
    );
    expect(result).toEqual(gameModes.PlayerDiscard);
  });

  test("makeAiDefenceMove should return PlayerAttack string, if gameModes=AiDefence, AI beat with trump card", () => {
    const result = AiActions.makeAiDefenceMove(
      gameModes.AiDefence,
      [testCards[0]],
      [testCards[5]],
      [],
      trumpSuit
    );
    expect(result).toEqual(gameModes.PlayerAttack);
  });

  test("makeAiDefenceMove should return PlayerDiscard string, if gameModes=AiDefence, AI beat with non-trump card, cardToBeat has less power, but suits not same", () => {
    const result = AiActions.makeAiDefenceMove(
      gameModes.AiDefence,
      [testCards[1]],
      [testCards[2]],
      [],
      trumpSuit
    );
    expect(result).toEqual(gameModes.PlayerDiscard);
  });

  test("makeAiDefenceMove should return PlayerDiscard string, if gameModes=AiDefence, AI beat with trump card, but cardToBeat has higher power", () => {
    const result = AiActions.makeAiDefenceMove(
      gameModes.AiDefence,
      [testCards[6]],
      [testCards[5]],
      [],
      trumpSuit
    );
    expect(result).toEqual(gameModes.PlayerDiscard);
  });

  test("makeAiDefenceMove should return PlayerAttack string, if gameModes=AiDefence, AI beat with non-trump card", () => {
    const result = AiActions.makeAiDefenceMove(
      gameModes.AiDefence,
      [testCards[0]],
      [testCards[1]],
      [],
      trumpSuit
    );
    expect(result).toEqual(gameModes.PlayerAttack);
  });

  test("makeAiDefenceMove should return PlayerDiscard string, if gameModes=AiDefence, AI beat with non-trump card, but cardToBeat has higher power", () => {
    const result = AiActions.makeAiDefenceMove(
      gameModes.AiDefence,
      [testCards[1]],
      [testCards[0]],
      [],
      trumpSuit
    );
    expect(result).toEqual(gameModes.PlayerDiscard);
  });
});
