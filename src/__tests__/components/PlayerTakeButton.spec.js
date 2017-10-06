import React from "react";
import renderer from "react-test-renderer";

import DeckUtils from "./../../utils/DeckUtils";
import PlayerTakeButton from "./../../components/GameScreen/Player/Buttons/PlayerTakeButton";
import * as gameModes from "./../../constants/GameModes";

describe("PlayerTakeButton snapshot testing", () => {
  const emptyFunc = () => {};
  const cards = DeckUtils.fillCards({ suit: "К" });

  test("will render itself markup", () => {
    const component = renderer.create(
      <PlayerTakeButton
        gameMode={gameModes.AiAttack}
        playerCards={cards}
        onPlayerTakeClick={emptyFunc}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("nothing render", () => {
    const component = renderer.create(
      <PlayerTakeButton
        gameMode={gameModes.PlayerAttack}
        playerCards={cards}
        onPlayerTakeClick={emptyFunc}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
