import React from "react";
import PropTypes from "prop-types";

const RemoveCardsButton = ({
  aiField,
  playerField,
  onRemoveCardsClick
}) => {
  let dash = <span>&mdash;</span>;
  return aiField.length === playerField.length &&
  aiField.length !== 0 &&
  playerField.length !== 0 ? (
    <button className="btn btn-info" onClick={onRemoveCardsClick}>
      {dash} Отбой!
    </button>
  ) : null;
};

export default RemoveCardsButton;

RemoveCardsButton.propTypes = {
  aiField: PropTypes.array.isRequired,
  playerField: PropTypes.array.isRequired,
  onRemoveCardsClick: PropTypes.func.isRequired
};
