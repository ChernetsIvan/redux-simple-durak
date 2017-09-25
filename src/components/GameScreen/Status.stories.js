import React from "react";

import { storiesOf } from "@storybook/react";

import Status from "./Status";
import * as gameModes from "./../../constants/GameModes";

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
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("player win", () => (
    <Status
      gameMode={gameModes.PlayerWin}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("the draw", () => (
    <Status
      gameMode={gameModes.TheDraw}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("player attack, AI defence", () => (
    <Status
      gameMode={gameModes.PlayerAttack}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("AI attack, player defence", () => (
    <Status
      gameMode={gameModes.AiAttack}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ))
  .add("AI taking cards, player discard him another cards", () => (
    <Status
      gameMode={gameModes.PlayerDiscard}
      onPlayerWin={emptyFunc}
      onAiWin={emptyFunc}
      onTheDraw={emptyFunc}
    />
  ));
