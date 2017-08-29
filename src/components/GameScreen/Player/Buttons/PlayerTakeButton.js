import React  from 'react';
import PropTypes from 'prop-types';

import * as gameModes from './../../../../constants/GameModes'

class PlayerTakeButton extends React.Component{
    render(){        
        let button = null;
        if(this.props.gameMode === gameModes.PlayerDefence || 
            this.props.gameMode === gameModes.AiAttack){
            
            let dash = <span>&mdash;</span>;
            if(this.props.playerCards.length > 0 ){
                button = (
                    <button className="btn btn-danger" onClick={this.props.onPlayerTakeClick}>
                        {dash} Беру!
                    </button>
                );
            }
        }
        return button;
    }
}

export default PlayerTakeButton;

PlayerTakeButton.propTypes = {
    gameMode: PropTypes.string.isRequired,
    onPlayerTakeClick: PropTypes.func.isRequired,
    playerCards: PropTypes.array.isRequired
};