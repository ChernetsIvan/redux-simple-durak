import { connect } from "react-redux";
import Status from "./../../components/GameScreen/Status";

import { gameOver } from "./../../actions";

const mapStateToProps = store => ({
  gameMode: store.game.gameMode
});

export const mapDispatchToProps = dispatch => ({
  onGameOver: gameMode => {
    dispatch(gameOver(gameMode));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Status);
