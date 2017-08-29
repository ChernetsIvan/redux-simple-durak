import { connect } from 'react-redux';
import PlayerTakeButton from './../../../../components/GameScreen/Player/Buttons/PlayerTakeButton';
import {clickOnPlayerTake} from './../../../../actions';

const mapStateToProps = store => ({
    gameMode: store.game.gameMode,
    playerCards: store.game.playerCards
});

const mapDispatchToProps = dispatch => ({ 
    onPlayerTakeClick: () => {
        dispatch(clickOnPlayerTake());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerTakeButton);