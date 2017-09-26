import React from "react";
import PropTypes from "prop-types";

import "./Card.css";

//Отрисовывает карту рубашкой кверху
export const HiddenCard = ({ bootStrapColClass }) => {
  let classAttr = bootStrapColClass + " card mb-1 shirt";
  return <div className={classAttr} />;
};

HiddenCard.propTypes = {
  bootStrapColClass: PropTypes.string.isRequired
};
