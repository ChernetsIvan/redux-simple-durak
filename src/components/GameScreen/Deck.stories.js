import React from "react";

import { storiesOf } from "@storybook/react";

import { Deck } from "./Deck";
import DeckUtils from "./../../utils/DeckUtils";

const cards = DeckUtils.fillCards({ suit: "Ч" });

storiesOf("Deck", module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">
        <div className="col-2">{story()}</div>
      </div>
    </div>
  ))
  .add("with 10 cards", () => <Deck cards={cards.slice(0, 10)} />)
  .add("with 30 cards", () => <Deck cards={cards.slice(5, 35)} />)
  .add("with 1 card", () => <Deck cards={cards.slice(35, 36)} />);
