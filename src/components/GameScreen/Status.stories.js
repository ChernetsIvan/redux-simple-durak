import React from "react";

import { storiesOf } from "@storybook/react";

import Status from "./Status";
import DeckUtils from "./../../utils/DeckUtils";
import * as gameModes from "./../../constants/GameModes";

const cards = DeckUtils.fillCards({ suit: "Б" });

storiesOf("Status", module)
  .addDecorator(story => (
    <div className="container my-1">
      <div className="row justify-content-center">{story()}</div>
    </div>
  ))
  .add("player lose", () => (
    <Status
      gameMode={gameModes.PlayerAttack}
      computerCards={cards.slice(0, 0)}
      playerCards={cards.slice(0, 10)}
      fullDeck={cards.slice(0, 0)}
    />
  ))
  .add("player win", () => (
    <Status
      gameMode={gameModes.PlayerAttack}
      computerCards={cards.slice(0, 10)}
      playerCards={cards.slice(0, 0)}
      fullDeck={cards.slice(0, 0)}
    />
  ))
  .add("the draw", () => (
    <Status
      gameMode={gameModes.PlayerAttack}
      computerCards={cards.slice(0, 0)}
      playerCards={cards.slice(0, 0)}
      fullDeck={cards.slice(0, 0)}
    />
  ))
  .add("player attack, AI defence", () => (
    <Status
      gameMode={gameModes.PlayerAttack}
      computerCards={cards.slice(0, 10)}
      playerCards={cards.slice(0, 10)}
      fullDeck={cards}
    />
  ))
  .add("AI attack, player defence", () => (
    <Status
      gameMode={gameModes.AiAttack}
      computerCards={cards.slice(0, 10)}
      playerCards={cards.slice(0, 10)}
      fullDeck={cards}
    />
  ))
  .add("AI taking cards, player discard him another cards", () => (
    <Status
      gameMode={gameModes.PlayerDiscard}
      computerCards={cards.slice(0, 10)}
      playerCards={cards.slice(0, 10)}
      fullDeck={cards}
    />
  ));
