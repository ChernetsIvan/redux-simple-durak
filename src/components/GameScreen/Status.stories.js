import React from "react";

import { storiesOf } from "@storybook/react";

import { Status } from "./Status";
import * as gameModes from "./../../constants/GameModes";

storiesOf("Status", module)
  .addDecorator(story => (
    <div className="container my-1">
      <div className="row justify-content-center">{story()}</div>
    </div>
  ))
  .add("player lose", () => <Status gameMode={gameModes.AIWin} />)
  .add("player win", () => <Status gameMode={gameModes.PlayerWin} />)
  .add("the draw", () => <Status gameMode={gameModes.TheDraw} />)
  .add("player attack, AI defence", () => (
    <Status gameMode={gameModes.PlayerAttack} />
  ))
  .add("AI attack, player defence", () => (
    <Status gameMode={gameModes.AiAttack} />
  ))
  .add("AI taking cards, player discard him another cards", () => (
    <Status gameMode={gameModes.PlayerDiscard} />
  ))
  .add("AI have not cards", () => <Status gameMode={gameModes.NoCardsAI} />);
