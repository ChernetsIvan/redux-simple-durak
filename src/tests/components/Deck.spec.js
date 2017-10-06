import React from "react";
import renderer from "react-test-renderer";
import Deck from "./../../components/GameScreen/Deck";
import DeckUtils from "./../../utils/DeckUtils";

describe("Deck testing", () => {
  const cards = DeckUtils.fillCards({ suit: "Б" });

  test("snapshot testing with cards", () => {
    const component = renderer.create(<Deck cards={cards.slice(0, 10)} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("snapshot testing without cards", () => {
    const component = renderer.create(<Deck cards={cards.slice(0, 0)} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
