import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import GameScreenContainer, {
  mapDispatchToProps
} from "./../../containers/GameScreen/GameScreenContainer";
import reducer from "./../../reducers";

describe("GameScreenContainer snapshot testing", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  test("Store in initial-state mode", () => {
    const component = renderer.create(
      <Provider store={store}>
        <GameScreenContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Map Dispatch To Props", () => {
  test("should call onBeginGameClick action", () => {
    const mockFunction = jest.fn(() => "Mock function");
    const { onBeginGameClick } = mapDispatchToProps(mockFunction);
    onBeginGameClick();
    expect(mockFunction).toBeCalled();
  });
});
