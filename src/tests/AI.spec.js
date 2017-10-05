import React from "react";
import renderer from "react-test-renderer";
import AI from "./../components/GameScreen/AI";
import DeckUtils from "./../utils/DeckUtils";

test("AI snapshot testing", () => {
  const cards = DeckUtils.fillCards({ suit: "Б" });
  const component = renderer.create(<AI cards={cards} />);
  expect(component.toJSON()).toMatchSnapshot();
});
