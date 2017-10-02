import React from "react";

import { storiesOf } from "@storybook/react";

import HiddenCard from "./HiddenCard";

storiesOf("HiddenCard", module)
  .addDecorator(story => (
    <div className="container">
      <div className="row">{story()}</div>
    </div>
  ))
  .add("example", () => <HiddenCard bootStrapColClass={"col-1"} />);
