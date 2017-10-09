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

  test("Store in initial-state mode", () => {
    const component = renderer.create(
      <Provider store={store}>
        <AIContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
