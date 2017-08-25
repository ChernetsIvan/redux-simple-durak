import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {clickOnStartGameButton, clickOnBeginGameButton} from './actions';

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onStartGameClick}>Start game</button>
        <button onClick={this.props.onBeginGameClick}>Begin game</button>
      </div>
    );
  }
}

App.propTypes = {
  isRenderSettingForStartNewGame: PropTypes.bool.isRequired,
  onBeginGameClick: PropTypes.func.isRequired,
  onStartGameClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isRenderSettingForStartNewGame: state.isRenderSettingForStartNewGame
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
