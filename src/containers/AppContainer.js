import { connect } from "react-redux";

import { App } from "./../components/App";

const mapStateToProps = store => ({
  showStartScreen: store.game.showStartScreen
});

export default connect(mapStateToProps)(App);
