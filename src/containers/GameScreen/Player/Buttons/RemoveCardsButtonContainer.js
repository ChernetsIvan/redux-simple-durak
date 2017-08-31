import { connect } from 'react-redux';
import RemoveCardsButton from './../../../../components/GameScreen/Player/Buttons/RemoveCardsButton';
import {clickOnRemoveCards} from './../../../../actions';

const mapStateToProps = store => ({
    aiField: store.game.aiField,
    playerField: store.game.playerField
});

const mapDispatchToProps = dispatch => ({ 
    onRemoveCardsClick: () => {
        dispatch(clickOnRemoveCards());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RemoveCardsButton);