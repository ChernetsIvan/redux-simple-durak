import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import DeckContainer from "./../../containers/GameScreen/DeckContainer";
import reducer from "./../../reducers";

describe("DeckContainer snapshot testing", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  test("Store in initial-state mode", () => {
    const component = renderer.create(
      <Provider store={store}>
        <DeckContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
