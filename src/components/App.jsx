import React from "react";
import PropTypes from "prop-types";

import StartScreenContainer from "./../containers/StartScreen/StartScreenContainer";
import GameScreenContainer from "./../containers/GameScreen/GameScreenContainer";

export default function App(showStartScreen) {
  return showStartScreen ? <StartScreenContainer /> : <GameScreenContainer />;
}

App.propTypes = {
  showStartScreen: PropTypes.bool.isRequired
};
