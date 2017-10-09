import React from "react";
import renderer from "react-test-renderer";

import { Provider } from "react-redux";
import { createStore } from "redux";

import PlayerContainer from "./../../containers/GameScreen/Player/PlayerContainer";
import reducer from "./../../reducers";
import * as actionTypes from "./../../constants/ActionTypes";

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

  test.skip("Dispatch with START_GAME_CLICKED-action", () => {
    store.dispatch({
      type: actionTypes.START_GAME_CLICKED
    });
    const component = renderer.create(
      <Provider store={store}>
        <PlayerContainer />
      </Provider>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});



/*
import React from "react";
import renderer from "react-test-renderer";

import DeckUtils from "./../../utils/DeckUtils";
import Player from "./../../components/GameScreen/Player/Player";

describe("Player snapshot testing", () => {  
  const emptyFunc = () => {};
  const cards = DeckUtils.fillCards({ suit: "К" });

  test("with count of cards > 10", () => {
    const component = renderer.create(
      <Player cards={cards} onCardClick={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test("with count of cards < 10", () => {
    const component = renderer.create(
      <Player cards={cards.slice(0,5)} onCardClick={emptyFunc} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
*/