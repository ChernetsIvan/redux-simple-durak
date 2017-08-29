import { connect } from 'react-redux';

import StartScreen from './../../components/StartScreen/StartScreen';

import {clickOnStartGameButton, clickOnRadioWhoMoveFirst} from './../../actions';

const mapStateToProps = store => ({
    isFirstMovePlayer: store.game.isFirstMovePlayer
});

const mapDispatchToProps =  dispatch => ({  
    onClickStartGame: () => {    
        dispatch(clickOnStartGameButton());
    },    
    onChangeRadio: (isFirstMovePlayer) => {
        dispatch(clickOnRadioWhoMoveFirst(isFirstMovePlayer));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(StartScreen);