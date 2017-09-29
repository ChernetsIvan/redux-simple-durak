import { connect } from "react-redux";

import StartScreen from "./../../components/StartScreen/StartScreen";

import {
  clickOnStartGameButton,
  clickOnRadioWhoMoveFirst
} from "./../../actions";

const mapStateToProps = store => ({
  isPlayerMoveFirst: store.game.isPlayerMoveFirst
});

const mapDispatchToProps = dispatch => ({
  onClickStartGame: () => {
    dispatch(clickOnStartGameButton());
  },
  onChangeRadio: isPlayerMoveFirst => {
    dispatch(clickOnRadioWhoMoveFirst(isPlayerMoveFirst));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);
