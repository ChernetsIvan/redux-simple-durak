import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

//Отрисовывает карту рубашкой кверху
export const HiddenCard = ({ key, bootStrapColClass }) => {
  let classAttr = bootStrapColClass + " card mb-1 shirt";
  return <div key={key} className={classAttr} />;
};

HiddenCard.propTypes = {
  key: PropTypes.number.isRequired,
  bootStrapColClass: PropTypes.string.isRequired
};
