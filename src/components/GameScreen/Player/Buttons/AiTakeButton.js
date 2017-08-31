import React from 'react';
import PropTypes from 'prop-types';

import * as gameModes from './../../../../constants/GameModes';

class AiTakeButton extends React.Component{
    render(){        
        let dash = <span>&mdash;</span>;
        let button = null;
        if(this.props.gameMode === gameModes.PlayerDiscard){
            button = (
                <button
                className="btn btn-success" 
                onClick={this.props.onAiTakeClick}>
                    {dash} Подбросить нечего, забирай!
                </button>
            );
        }else{
            button = null;
        }                
        return button;
    }
}

export default AiTakeButton;

AiTakeButton.propTypes = {
    gameMode: PropTypes.string.isRequired,
    onAiTakeClick: PropTypes.func.isRequired,
};