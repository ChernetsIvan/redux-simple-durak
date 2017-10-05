import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import AIContainer from "./../../containers/GameScreen/AIContainer";
import reducer from "./../../reducers";
import { clickOnStartGameButton } from "./../../actions";

describe("AIContainer snapshot testing", () => {
  const store = createStore(reducer);

  test("Store does not contain any card", () => {
    const component = renderer.create(
      <Provider store={store}>
        <AIContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  store.dispatch(clickOnStartGameButton);

  test("Store contains some cards", () => {
    const component = renderer.create(
      <Provider store={store}>
        <AIContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
