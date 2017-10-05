import React from "react";
import renderer from "react-test-renderer";
import AI from "./../components/GameScreen/AI";
import DeckUtils from "./../utils/DeckUtils";

describe("AI snapshot testing", () => {

  test("AI recieve cards", () => {
    const cards = DeckUtils.fillCards({ suit: "Б" });
    const component = renderer.create(<AI cards={cards} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("AI don't recieve cards", () => {
    const cards = DeckUtils.fillCards({ suit: "Б" });
    const component = renderer.create(<AI cards={cards.slice(0,0)} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

});