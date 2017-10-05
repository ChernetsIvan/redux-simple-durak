import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import AIContainer from "./../../containers/GameScreen/AIContainer";
import reducer from "./../../reducers";

describe("AIContainer snapshot testing", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  test("Store does not contain any card", () => {
    const component = renderer.create(
      <Provider store={store}>
        <AIContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Store contains some cards", () => {
    store.dispatch({
      type: "START_GAME_CLICKED"
    });
    const component = renderer.create(
      <Provider store={store}>
        <AIContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
