import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import PlayerContainer, {
  mapDispatchToProps
} from "./../../containers/GameScreen/Player/PlayerContainer";
import reducer from "./../../reducers";

describe("PlayerContainer snapshot testing", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  test("Store in initial-state mode", () => {
    const component = renderer.create(
      <Provider store={store}>
        <PlayerContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

describe("Map Dispatch To Props", () => {
  test("should call clickOnCard action-creator", () => {
    const mockFunction = jest.fn(() => "Mock function");
    const { onCardClick } = mapDispatchToProps(mockFunction);
    onCardClick(0);
    expect(mockFunction).toBeCalled();
  });
});
