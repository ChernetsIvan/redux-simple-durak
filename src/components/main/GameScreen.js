import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GameScreen extends Component {    
    render() {
        return (
            <button onClick={this.props.handleBeginGameClick}>Begin game</button>
        );
    }
}

export default GameScreen;

GameScreen.propTypes = {
    handleBeginGameClick: PropTypes.func.isRequired
};