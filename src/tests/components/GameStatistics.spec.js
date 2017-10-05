import React from "react";
import renderer from "react-test-renderer";
import GameStatistics from "./../../components/GameStatistics";

test("GameStatistics snapshot testing", () => {
  const emptyFunc = () => {};
  const component = renderer.create(
    <GameStatistics
      playerWins={7}
      aiWins={4}
      draws={5}
      onBeginGameClick={emptyFunc}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
