import React from "react";

import HiddenCard from "./HiddenCard";

//Применяется AI.js, Player.js и Field.js - когда во входном массиве нет карт:
//чтобы "не скакала" разметка.
const InvisibleCard = () => {
  return (
    <div className="container invisible">
      <div className="row">
        <HiddenCard bootStrapColClass="col-1" />
      </div>
    </div>
  );
};

export default InvisibleCard;
