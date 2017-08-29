import { connect } from 'react-redux';

import App from './../components/App';

const mapStateToProps = store => ({
    isRenderSettingsForStartNewGame: store.game.isRenderSettingsForStartNewGame
});

export default connect(mapStateToProps)(App);