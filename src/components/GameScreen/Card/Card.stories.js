import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "./../../../../public/libs/bootstrap/css/bootstrap.min.css";
// а js-файлы (и bootstrap'a) подключены в .storybook/preview-head.html

import Card from "./Card";

storiesOf("Card", module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">{story()}</div>
    </div>
  ))
  .add("first example", () => (
    <Card
      id={1}
      rank={{ text: "6", cardValue: 1 }}
      suit={{ suit: "К" }}
      onCardClick={action("Card was clicked!")}
      bootStrapColClass={"col-1"}
    />
  ))
  .add("second example", () => (
    <Card
      id={2}
      rank={{ text: "Д", cardValue: 7 }}
      suit={{ suit: "Б" }}
      onCardClick={action("Card was clicked!")}
      bootStrapColClass={"col-1"}
    />
  ));
