import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StartScreenContainer from './../containers/StartScreen/StartScreenContainer';
import GameScreenContainer from './../containers/GameScreen/GameScreenContainer';

class App extends Component {
    render() {
        let output = null;
        if(this.props.isRenderSettingsForStartNewGame){
            output = <StartScreenContainer />
        }else{
            output = <GameScreenContainer />
        }
        return <div>{output}</div>        
    }
}

App.propTypes = {
    isRenderSettingsForStartNewGame: PropTypes.bool.isRequired
};

export default App;
