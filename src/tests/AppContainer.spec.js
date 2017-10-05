import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import AppContainer from "./../containers/AppContainer";
import reducer from "./../reducers";

describe("AppContainer snapshot testing", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  test("Store in initial-state mode", () => {
    const component = renderer.create(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Dispatching with START_GAME_CLICKED-action", () => {
    store.dispatch({
      type: "START_GAME_CLICKED"
    });
    const component = renderer.create(
      <Provider store={store}>
        <GameScreenContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Dispatching with BEGIN_GAME_CLICKED-action", () => {
    store.dispatch({
      type: "BEGIN_GAME_CLICKED"
    });
    const component = renderer.create(
      <Provider store={store}>
        <GameScreenContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
