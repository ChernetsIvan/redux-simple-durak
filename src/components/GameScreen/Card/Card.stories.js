import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "./../../../../public/libs/bootstrap/css/bootstrap.min.css";
//а js-файлы (и bootstrap'a) подключены в .storybook/preview-head.html

import Card from "./Card";

storiesOf("Card", module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">{story()}</div>
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
  .add("yet another", () => (
    <Card
      id={2}
      rank={new Object({ text: "Д", cardValue: 7 })}
      suit={new Object({ suit: "Б" })}
      onCardClick={action("Card was clicked!")}
      bootStrapColClass={"col-1"}
      hidden={false}
    />
  ))
  .add("with hidden=TRUE", () => (
    <Card id={3} bootStrapColClass="col-1" hidden={true} />
  ));
