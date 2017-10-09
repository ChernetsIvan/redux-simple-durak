import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";

import Status from "./../../components/GameScreen/Status";
import * as gameModes from "./../../constants/GameModes";

Enzyme.configure({ adapter: new Adapter() });

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
  });

  test("test of calling onGameOver when AiWin", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <Status gameMode={gameModes.AIWin} onGameOver={mockCallBack} />
    );
    wrapper.instance().componentDidUpdate();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test("test of calling onGameOver when PlayerWin", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <Status gameMode={gameModes.PlayerWin} onGameOver={mockCallBack} />
    );
    wrapper.instance().componentDidUpdate();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test("test of calling onGameOver when TheDraw", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <Status gameMode={gameModes.TheDraw} onGameOver={mockCallBack} />
    );
    wrapper.instance().componentDidUpdate();
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  test("test of calling onGameOver when game is not over yet", () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(
      <Status gameMode={gameModes.PlayerAttack} onGameOver={mockCallBack} />
    );
    wrapper.instance().componentDidUpdate();
    expect(mockCallBack.mock.calls.length).toEqual(0);
  });
});
