import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import * as actions from './actions';

import GameScreen from './components/main/GameScreen';
import StartScreen from './components/main/StartScreen';

class App extends Component {
    render() {
        let output = null;
        if(this.props.isRenderSettingsForStartNewGame){
            output = 
                <StartScreen 
                    isFirstMovePlayer={this.props.isFirstMovePlayer}
                    onClickStartGame={this.props.onStartGameClick}
                    onChangeRadio={this.props.onRadioChange} />
        }else{
            output = 
                <GameScreen 
                    onBeginGameClick={this.props.onBeginGameClick}
                    gameMode={this.props.gameMode}
                    computerCards={this.props.computerCards}
                    playerCards={this.props.playerCards}
                    fullDeck={this.props.fullDeck}
                    firstStart={this.props.firstStart} 
                    aiField={this.props.aiField}
                    playerField={this.props.playerField}
                    onPrevClick={this.props.onPrevClick}
                    onNextClick={this.props.onNextClick} 
                    onPlayerTakeClick={this.props.onPlayerTakeClick}/>
        }
        return (
            <div>
                {output}
            </div>
        );
    }
}

App.propTypes = {
    isRenderSettingsForStartNewGame: PropTypes.bool.isRequired,
    trumpSuit: PropTypes.object.isRequired,    
    fullDeck: PropTypes.array.isRequired,
    computerCards: PropTypes.array.isRequired,
    aiField: PropTypes.array.isRequired,
    playerField: PropTypes.array.isRequired,
    playerCards: PropTypes.array.isRequired,
    playerStartInd: PropTypes.number.isRequired,
    playerEndInd: PropTypes.number.isRequired,
    firstStart: PropTypes.bool.isRequired,
    isFirstMovePlayer: PropTypes.bool.isRequired,
    gameMode: PropTypes.string.isRequired,

    onBeginGameClick: PropTypes.func.isRequired,
    onStartGameClick: PropTypes.func.isRequired,
    onRadioChange: PropTypes.func.isRequired,
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onPlayerTakeClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isRenderSettingsForStartNewGame: state.game.isRenderSettingsForStartNewGame,
    trumpSuit: state.game.trumpSuit,
    fullDeck: state.game.fullDeck,
    computerCards: state.game.computerCards,
    aiField: state.game.aiField,
    playerField: state.game.playerField,
    playerCards: state.game.playerCards,    
    firstStart: state.game.firstStart,
    isFirstMovePlayer: state.game.isFirstMovePlayer,
    gameMode: state.game.gameMode,
    playerStartInd: state.game.playerStartInd,
    playerEndInd: state.game.playerEndInd,
});


const mapDispatchToProps =  dispatch => ({
    onBeginGameClick: () => {
        dispatch(actions.clickOnBeginGameButton());
    },    
    onStartGameClick: () => {    
        dispatch(actions.clickOnStartGameButton());
    },    
    onRadioChange: (isFirstMovePlayer) => {
        dispatch(actions.clickOnRadioWhoMoveFirst(isFirstMovePlayer));
    },
    
    onPrevClick: () => {
        dispatch(actions.clickOnPrev());
    },
    onNextClick: () => {
        dispatch(actions.clickOnNext());
    },

    onPlayerTakeClick: () => {
        dispatch(actions.clickOnPlayerTake());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
