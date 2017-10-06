import React from "react";
import renderer from "react-test-renderer";

import DeckUtils from "./../../utils/DeckUtils";
import RemoveCardsButton from "./../../components/GameScreen/Player/Buttons/RemoveCardsButton";

describe("RemoveCardsButton snapshot testing", () => {
  const emptyFunc = () => {};
  const cards = DeckUtils.fillCards({ suit: "К" });

  test("will render itself markup", () => {
    const component = renderer.create(
      <RemoveCardsButton
        aiField={cards}
        playerField={cards}
        onRemoveCardsClick={emptyFunc}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("nothing render", () => {
    const component = renderer.create(
      <RemoveCardsButton
        aiField={cards}
        playerField={cards.slice(0,5)}
        onRemoveCardsClick={emptyFunc}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
