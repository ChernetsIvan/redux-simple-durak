import { connect } from 'react-redux';
import Status from './../../components/GameScreen/Status';

const mapStateToProps = store => ({
    gameMode: store.game.gameMode,
    computerCards: store.game.computerCards,
    playerCards: store.game.playerCards,
    fullDeck: store.game.fullDeck,
    firstStart: store.game.firstStart
});

export default connect(mapStateToProps)(Status);