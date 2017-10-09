import { connect } from "react-redux";
import AiTakeButton from "./../../../../components/GameScreen/Player/Buttons/AiTakeButton";
import { clickOnAiTake } from "./../../../../actions";

const mapStateToProps = store => ({
  gameMode: store.game.gameMode
});

export const mapDispatchToProps = dispatch => ({
  onAiTakeClick: () => {
    dispatch(clickOnAiTake());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AiTakeButton);
