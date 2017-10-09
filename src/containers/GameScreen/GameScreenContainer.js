import { connect } from "react-redux";

import GameScreen from "./../../components/GameScreen/GameScreen";

import { clickOnBeginGameButton } from "./../../actions";

const mapStateToProps = store => ({
  aiField: store.game.aiField,
  playerField: store.game.playerField
});

export const mapDispatchToProps = dispatch => ({
  onBeginGameClick: () => {
    dispatch(clickOnBeginGameButton());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
