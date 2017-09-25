import { connect } from "react-redux";

import { GameStatistics } from "./../components/GameStatistics";

import { clickOnBeginGameButton } from "./../actions";

const mapStateToProps = store => ({
  playerWins: store.statistics.playerWins,
  aiWins: store.statistics.aiWins,
  draws: store.statistics.draws
});

const mapDispatchToProps = dispatch => ({
  onBeginGameClick: () => {
    dispatch(clickOnBeginGameButton());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GameStatistics);
