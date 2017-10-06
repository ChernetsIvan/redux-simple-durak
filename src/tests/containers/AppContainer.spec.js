import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import AppContainer from "./../../containers/AppContainer";
import reducer from "./../../reducers";
import * as actionTypes from "./../../constants/ActionTypes";

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

  test("Dispatch with START_GAME_CLICKED-action", () => {
    store.dispatch({
      type: actionTypes.START_GAME_CLICKED
    });
    const component = renderer.create(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
    expect(component.toJSON().props).toMatchSnapshot();
  });

  test("Dispatch with BEGIN_GAME_CLICKED-action", () => {
    store.dispatch({
      type: actionTypes.BEGIN_GAME_CLICKED
    });
    const component = renderer.create(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Dispatch with WHO_MOVE_FIRST_CHANGED-action, AI move first", () => {
    store.dispatch({
      type: actionTypes.WHO_MOVE_FIRST_CHANGED,
      payload: false
    });
    const component = renderer.create(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
