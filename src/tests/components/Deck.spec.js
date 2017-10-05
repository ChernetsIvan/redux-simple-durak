import React from "react";
import renderer from "react-test-renderer";
import Deck from "./../../components/GameScreen/Deck";
import DeckUtils from "./../../utils/DeckUtils";

test("Deck snapshot testing", () => {
  const cards = DeckUtils.fillCards({ suit: "Б" });
  const component = renderer.create(<Deck cards={cards.slice(0,10)} />);
  expect(component.toJSON()).toMatchSnapshot();
});
