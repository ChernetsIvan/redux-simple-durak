import { connect } from "react-redux";
import ShowStatisticsLink from "./../../../components/GameScreen/Player/ShowStatisticsLink";

import { clickOnGameOverLink } from "./../../../actions";

const mapStateToProps = store => ({
  gameMode: store.game.gameMode
});

const mapDispatchToProps = dispatch => ({
  onGameOverClick: gameMode => {
    dispatch(clickOnGameOverLink(gameMode));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowStatisticsLink);
