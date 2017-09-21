import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "./../../../../public/libs/bootstrap/css/bootstrap.min.css";
//а js-файлы (и bootstrap'a) подключены в .storybook/preview-head.html

import Card from "./Card";

storiesOf("Card", module)
  .addDecorator(story => (
    <div class="container">
      <div class="row">{story()}</div>
    </div>
  ))
  .add("with hidden=FALSE", () => (
    <Card
      id={1}
      rank={new Object({ text: "6", cardValue: 1 })}
      suit={new Object({ suit: "К" })}
      onCardClick={action("Card was clicked!")}
      bootStrapColClass={"col-1"}
      hidden={false}
    />
  ))
  .add("with hidden=TRUE", () => (
    <Card key={2} bootStrapColClass="col-1" hidden={true} />
  ));
