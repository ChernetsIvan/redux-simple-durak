import React from "react";
import renderer from "react-test-renderer";
import Field from "./../components/GameScreen/Field";
import DeckUtils from "./../utils/DeckUtils";

describe("Field snapshot testing", () => {
  const cards = DeckUtils.fillCards({ suit: "Б" });

  test("Field don't recieve cards", () => {
    const component = renderer.create(<Field cards={cards.slice(0, 0)} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Field recieve 10 cards", () => {
    const component = renderer.create(<Field cards={cards.slice(0, 10)} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
