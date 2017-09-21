import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import "./../../public/libs/bootstrap/css/bootstrap.min.css";

import Card from "./../components/GameScreen/Card/Card";
import "./../components/GameScreen/Card/Card.css";

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
  .add("with text", () => (
    <Button onClick={action("clicked")}>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
  ));

storiesOf("Card", module)
  .addDecorator(story => (
    <div class="container">
      <div class="row">{story()}</div>
    </div>
  ))
  .add("Card with FALSE hidden flag", () => (
    <Card
      id={1}
      rank={new Object({ text: "6", cardValue: 1 })}
      suit={new Object({ suit: "K" })}
      onCardClick={action("Card was clicked!")}
      bootStrapColClass={"col-1"}
      hidden={false}
    />
  ))
  .add("Card with TRUE hidden flag", () => (
    <Card key={2} bootStrapColClass="col-1" hidden={true} />
  ));
