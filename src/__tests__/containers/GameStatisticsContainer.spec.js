import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import GameStatisticsContainer from "./../../containers/GameStatisticsContainer";
import reducer from "./../../reducers";
import * as actionTypes from "./../../constants/ActionTypes";
import { AIWin, PlayerWin, TheDraw } from "./../../constants/GameModes";

describe("GameStatisticsContainer snapshot testing", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducer);
  });

  test("Dispatch with GAME_OVER-action, AI win", () => {
    store.dispatch({
      type: actionTypes.GAME_OVER,
      payload: AIWin
    });
    const component = renderer.create(
      <Provider store={store}>
        <GameStatisticsContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Store in initial-state mode", () => {
    const component = renderer.create(
      <Provider store={store}>
        <GameStatisticsContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Dispatch with GAME_OVER-action, Player win", () => {
    store.dispatch({
      type: actionTypes.GAME_OVER,
      payload: PlayerWin
    });
    const component = renderer.create(
      <Provider store={store}>
        <GameStatisticsContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Dispatch with GAME_OVER-action, the draw", () => {
    store.dispatch({
      type: actionTypes.GAME_OVER,
      payload: TheDraw
    });
    const component = renderer.create(
      <Provider store={store}>
        <GameStatisticsContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("Dispatch with GAME_OVER-action, incorrect payload", () => {
    store.dispatch({
      type: actionTypes.GAME_OVER,
      payload: "IncorrectPayload"
    });
    const component = renderer.create(
      <Provider store={store}>
        <GameStatisticsContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});

/*
describe("Checking mapDispatchToProps-function", () => {
  test("calls myFnProp on submit", () => {
    const myFnProp = jest.fn();
    const component = mounted(<MyComponent myFnProp={myFnProp} />);
    component.simulate("submit");
    expect(myFnProp).toHaveBeenCalled();
  });
});
*/
