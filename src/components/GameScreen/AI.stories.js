import React from "react";

import { storiesOf } from "@storybook/react";

import { AI } from "./AI";
import DeckUtils from "./../../utils/DeckUtils";

const cards = DeckUtils.fillCards({ suit: "Б" });

storiesOf("AI", module)
  .add("with 1 card", () => <AI cards={cards.slice(0, 1)} />)
  .add("with 7 cards", () => <AI cards={cards.slice(5, 12)} />)
  .add("with 20 cards", () => <AI cards={cards.slice(16, 36)} />);
