import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import GameStatisticsContainer, {
  mapDispatchToProps
} from "./../../containers/GameStatisticsContainer";
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

  /*
  test("Checking mapDispatchToProps-function", () => {
    store.dispatch({
      type: actionTypes.BEGIN_GAME_CLICKED
    });
    const action = store.getActions();
    expect(action[0].type).toBe("BEGIN_GAME_CLICKED");
  });
  */
});

describe("Map Dispatch To Props", () => {
  test("should call onBeginGameClick action", () => {
    const mockFunction = jest.fn(() => 'Mock function');
    const { onBeginGameClick } = mapDispatchToProps(mockFunction);
    onBeginGameClick();
    expect(mockFunction).toBeCalled();
  });
});
