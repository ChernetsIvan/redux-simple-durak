import { connect } from "react-redux";
import ShowStatisticsLink from "./../../../components/GameScreen/Player/ShowStatisticsLink";

const mapStateToProps = store => ({
  gameMode: store.game.gameMode
});

export default connect(mapStateToProps)(ShowStatisticsLink);
