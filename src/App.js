import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {clickOnStartGameButton, clickOnBeginGameButton} from './actions';

import GameScreen from './components/main/GameScreen';
import StartScreen from './components/main/StartScreen';

class App extends Component {

    render() {
        console.log(this.props);

        let output = null;
        if(this.props.isRenderSettingsForStartNewGame){
            output = <StartScreen />
        }else{
            output = <GameScreen />
        }
        return (
            <div>
                <button onClick={this.props.onStartGameClick}>Start game</button>
                <button onClick={this.props.onBeginGameClick}>Begin game</button>
                {output}
            </div>
        );
    }
}

App.propTypes = {
    isRenderSettingsForStartNewGame: PropTypes.bool.isRequired,
    onBeginGameClick: PropTypes.func.isRequired,
    onStartGameClick: PropTypes.func.isRequired,
    fullDeck: PropTypes.array.isRequired,
    computerCards: PropTypes.array.isRequired,
    aiField: PropTypes.array.isRequired,
    playerField: PropTypes.array.isRequired,
    playerCards: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    isRenderSettingsForStartNewGame: state.startGame.isRenderSettingsForStartNewGame,
    fullDeck: state.startGame.fullDeck,
    computerCards: state.startGame.computerCards,
    aiField: state.startGame.aiField,
    playerField: state.startGame.playerField,
    playerCards: state.startGame.playerCards
});


const mapDispatchToProps =  dispatch => ({    
    onStartGameClick: () => {    
        dispatch(clickOnStartGameButton());
    },
    onBeginGameClick: () => {
        dispatch(clickOnBeginGameButton());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
