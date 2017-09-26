import React from "react";

import { HiddenCard } from "./HiddenCard";

import { uniqueId } from "lodash-es";

//Применяется AI.js, Player.js и Field.js - когда во входном массиве нет карт:
//чтобы "не скакала" разметка.
export const InvisibleCard = () => {
  let randKey = uniqueId();
  return (
    <div className="container invisible">
      <div className="row">
        <HiddenCard key={randKey} bootStrapColClass="col-1" />
      </div>
    </div>
  );
};
