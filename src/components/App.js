import React from "react";
import PropTypes from "prop-types";

import StartScreenContainer from "./../containers/StartScreen/StartScreenContainer";
import GameScreenContainer from "./../containers/GameScreen/GameScreenContainer";

const App = ({ showStartScreen }) =>
  showStartScreen ? <StartScreenContainer /> : <GameScreenContainer />;

export default App;

App.propTypes = {
  showStartScreen: PropTypes.bool.isRequired
};
