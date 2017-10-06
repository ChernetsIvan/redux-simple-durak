import React from "react";
import renderer from "react-test-renderer";
import ShowStatisticsLink from "./../../components/GameScreen/Player/ShowStatisticsLink";
import * as gameModes from "./../../constants/GameModes";

describe("ShowStatisticsLink testing", () => {

  test("return markup", () => {
    const component = renderer.create(<ShowStatisticsLink gameMode={gameModes.AIWin} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("return nothing", () => {
    const component = renderer.create(<ShowStatisticsLink gameMode={gameModes.AiAttack} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
