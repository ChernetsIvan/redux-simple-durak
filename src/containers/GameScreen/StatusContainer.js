import { connect } from "react-redux";
import { Status } from "./../../components/GameScreen/Status";

const mapStateToProps = store => ({
  gameMode: store.game.gameMode
});

export default connect(mapStateToProps)(Status);
