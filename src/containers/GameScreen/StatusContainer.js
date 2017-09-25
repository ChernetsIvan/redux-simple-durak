import { connect } from "react-redux";
import Status from "./../../components/GameScreen/Status";

import { playerWin, aiWin, theDraw } from "./../../actions";

const mapStateToProps = store => ({
  gameMode: store.game.gameMode
});

const mapDispatchToProps = dispatch => ({
  onPlayerWin: () => dispatch(playerWin()),
  onAiWin: () => dispatch(aiWin()),
  onTheDraw: () => dispatch(theDraw())
});

export default connect(mapStateToProps, mapDispatchToProps)(Status);
