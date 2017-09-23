import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Provider } from "react-redux";
import { createStore } from "redux";

import Player from "./Player";
import DeckUtils from "./../../../utils/DeckUtils";
import * as gameModes from "./../../../constants/GameModes";

import reducer from "./../../../reducers";

const store = createStore(reducer);

const cards = DeckUtils.fillCards({ suit: "К" });

const clickOnCard = action("Card was clicked!");

storiesOf("Player", module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add("with 4 cards", () => (
    <Player cards={cards.slice(10, 14)} onCardClick={clickOnCard} />
  ))
  .add("with 7 cards", () => (
    <Player cards={cards.slice(28, 35)} onCardClick={clickOnCard} />
  ))
  .add("with 12 cards", () => (
    <Player cards={cards.slice(0, 12)} onCardClick={clickOnCard} />
  ))
  .add("with 36 cards", () => (
    <Player cards={cards.slice(0, 36)} onCardClick={clickOnCard} />
  ));
