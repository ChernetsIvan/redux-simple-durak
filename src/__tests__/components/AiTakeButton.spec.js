import React from "react";
import renderer from "react-test-renderer";

import AiTakeButton from "./../../components/GameScreen/Player/Buttons/AiTakeButton";
import * as gameModes from "./../../constants/GameModes";

describe("PlayerTakeButton snapshot testing", () => {
  const emptyFunc = () => {};

  test("will render itself markup", () => {
    const component = renderer.create(
      <AiTakeButton
        gameMode={gameModes.PlayerDiscard}
        onAiTakeClick={emptyFunc}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("nothing render", () => {
    const component = renderer.create(
      <AiTakeButton
        gameMode={gameModes.PlayerAttack}
        onAiTakeClick={emptyFunc}
      />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
