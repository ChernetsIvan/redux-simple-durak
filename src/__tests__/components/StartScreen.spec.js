import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import toJson from "enzyme-to-json";

import StartScreen from "./../../components/StartScreen/StartScreen";

Enzyme.configure({ adapter: new Adapter() });

describe("StartScreen", () => {
  const mockCallBack = jest.fn();

  test("Test onClickStartGame event", () => {
    const mockClickStartGame = jest.fn();
    const component = shallow(
      <StartScreen
        isPlayerMoveFirst
        onClickStartGame={mockClickStartGame}
        onChangeRadio={mockCallBack}
      />
    );
    component.find('[className="btn btn-secondary mr-3"]').simulate("click");
    expect(mockClickStartGame.mock.calls.length).toEqual(1);
  });

  test("Test onChangeRadio event on PlayerFirst radio", () => {
    const mockChangeRadio = jest.fn();
    const component = shallow(
      <StartScreen
        isPlayerMoveFirst
        onClickStartGame={mockCallBack}
        onChangeRadio={mockChangeRadio}
      />
    );
    component
      .find('[name="PlayerFirst"]')
      .simulate("change", { target: { checked: true } });
    expect(mockChangeRadio.mock.calls.length).toEqual(1);
  });

  test("Test onChangeRadio event on AiFirst radio", () => {
    const mockChangeRadio = jest.fn();
    const component = shallow(
      <StartScreen
        isPlayerMoveFirst
        onClickStartGame={mockCallBack}
        onChangeRadio={mockChangeRadio}
      />
    );
    component
      .find('[name="AiFirst"]')
      .simulate("change", { target: { checked: true } });
    expect(mockChangeRadio.mock.calls.length).toEqual(1);
  });

  test("test of rendering", () => {
    const component = shallow(
      <StartScreen
        isPlayerMoveFirst
        onClickStartGame={mockCallBack}
        onChangeRadio={mockCallBack}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
