import { connect } from 'react-redux';
import Player from './../../../components/GameScreen/Player/Player';
import {clickOnPrev, clickOnNext, clickOnCard} from './../../../actions';

const mapStateToProps = store => ({
    cards: store.game.playerCards,
    playerStartInd: store.game.playerStartInd,
    playerEndInd: store.game.playerEndInd    
});

const mapDispatchToProps =  dispatch => ({   
    onPrevClick: () => {
        dispatch(clickOnPrev());
    },
    onNextClick: () => {
        dispatch(clickOnNext());
    },
    onCardClick: (cardId) => {
        dispatch(clickOnCard(cardId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);