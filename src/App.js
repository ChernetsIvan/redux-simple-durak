import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {clickOnStartGameButton, clickOnBeginGameButton, clickOnRadioWhoMoveFirst} from './actions';

import GameScreen from './components/main/GameScreen';
import StartScreen from './components/main/StartScreen';

class App extends Component {
    render() {
        console.log(this.props);

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
                    handleBeginGameClick={this.props.onBeginGameClick}
                    gameMode={this.props.gameMode}
                    computerCards={this.props.computerCards}
                    playerCards={this.props.playerCards}
                    fullDeck={this.props.fullDeck}
                    firstStart={this.props.firstStart} 
                    aiField={this.props.aiField}
                    playerField={this.props.playerField}/>
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
    onRadioChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isRenderSettingsForStartNewGame: state.startGame.isRenderSettingsForStartNewGame,
    trumpSuit: state.startGame.trumpSuit,
    fullDeck: state.startGame.fullDeck,
    computerCards: state.startGame.computerCards,
    aiField: state.startGame.aiField,
    playerField: state.startGame.playerField,
    playerCards: state.startGame.playerCards,
    playerStartInd: state.startGame.playerStartInd,
    playerEndInd: state.startGame.playerEndInd,
    firstStart: state.startGame.firstStart,
    isFirstMovePlayer: state.startGame.isFirstMovePlayer,
    gameMode: state.startGame.gameMode
});


const mapDispatchToProps =  dispatch => ({    
    onStartGameClick: () => {    
        dispatch(clickOnStartGameButton());
    },
    onBeginGameClick: () => {
        dispatch(clickOnBeginGameButton());
    },
    onRadioChange: (isFirstMovePlayer) => {
        dispatch(clickOnRadioWhoMoveFirst(isFirstMovePlayer));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
