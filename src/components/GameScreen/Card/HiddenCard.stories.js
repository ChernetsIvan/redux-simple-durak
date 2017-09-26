import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { HiddenCard } from "./HiddenCard";

storiesOf("HiddenCard", module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">{story()}</div>
    </div>
  ))
  .add("first", () => <HiddenCard bootStrapColClass={"col-1"} />);
