import React from "react";
import PropTypes from "prop-types";

const RemoveCardsButton = ({
  aiField,
  playerField,
  onRemoveCardsClick
}) => {
  const dash = <span>&mdash;</span>;
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
  aiField: PropTypes.arrayOf(PropTypes.object).isRequired,
  playerField: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveCardsClick: PropTypes.func.isRequired
};
