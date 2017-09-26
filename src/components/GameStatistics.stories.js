import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { GameStatistics } from "./GameStatistics";

storiesOf("GameStatistics", module).add("example", () => (
  <GameStatistics
    playerWins={3}
    aiWins={4}
    draws={5}
    onBeginGameClick={action("Link was clicked!")}
  />
));
