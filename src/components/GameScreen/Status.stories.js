import React from "react";

import { storiesOf } from "@storybook/react";

import { Status } from "./Status";
import * as gameModes from "./../../constants/GameModes";
import DeckUtils from "./../../utils/DeckUtils";

const cards = DeckUtils.fillCards({ suit: "Ч" });
const emptyFunc = () => {};

storiesOf("Status", module)
  .addDecorator(story => (
    <div className="container my-1">
      <div className="row justify-content-center">{story()}</div>
    </div>
  ))
  .add("player lose", () => (
    <Status
      gameMode={gameModes.AIWin}
      computerCards={cards}
      fullDeck={cards}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("player win", () => (
    <Status
      gameMode={gameModes.PlayerWin}
      computerCards={cards}
      fullDeck={cards}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("the draw", () => (
    <Status
      gameMode={gameModes.TheDraw}
      computerCards={cards}
      fullDeck={cards}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("player attack, AI defence", () => (
    <Status
      gameMode={gameModes.PlayerAttack}
      computerCards={cards}
      fullDeck={cards}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("AI attack, player defence", () => (
    <Status
      gameMode={gameModes.AiAttack}
      computerCards={cards}
      fullDeck={cards}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("AI taking cards, player discard him another cards", () => (
    <Status
      gameMode={gameModes.PlayerDiscard}
      computerCards={cards}
      fullDeck={cards}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("AI have not cards", () => (
    <Status
      gameMode={gameModes.PlayerAttack}
      computerCards={cards.slice(0, 0)}
      fullDeck={cards}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ));
