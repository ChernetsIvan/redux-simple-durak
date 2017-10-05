import React from "react";
import renderer from "react-test-renderer";
import Status from "./../../components/GameScreen/Status";
import * as gameModes from "./../../constants/GameModes";

describe("Status tests", () => {
  const emptyFunc = () => {};

  test("Ai win", () => {
    const component = renderer.create(
      <Status gameMode={gameModes.AIWin} onGameOver={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Player win", () => {
    const component = renderer.create(
      <Status gameMode={gameModes.PlayerWin} onGameOver={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("The Draw", () => {
    const component = renderer.create(
      <Status gameMode={gameModes.TheDraw} onGameOver={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Player Attack", () => {
    const component = renderer.create(
      <Status gameMode={gameModes.PlayerAttack} onGameOver={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Player Defence", () => {
    const component = renderer.create(
      <Status gameMode={gameModes.PlayerDefence} onGameOver={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Player Defence", () => {
    const component = renderer.create(
      <Status gameMode={gameModes.PlayerDefence} onGameOver={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Player Discard", () => {
    const component = renderer.create(
      <Status gameMode={gameModes.PlayerDiscard} onGameOver={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Ai have not cards", () => {
    const component = renderer.create(
      <Status gameMode={gameModes.NoCardsAI} onGameOver={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("return null", () => {
    const component = renderer.create(
      <Status gameMode={""} onGameOver={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  })

});
