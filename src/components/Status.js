import React from 'react';
import PropTypes from 'prop-types';
import {statusMessages} from './../constants/GameConstants';
import * as gameModes from './../constants/GameModes';

class Status extends React.Component{
    render(){
        let outText = null;

        if(this.props.fullDeck.length===0 && !this.props.firstStart){   
            if(this.props.computerCards.length===0){
                outText = statusMessages.PlayerLose;
            }
            if(this.props.playerCards.length===0){
                outText = statusMessages.PlayerWin;
            }
            if(this.props.computerCards.length===0 && 
                this.props.playerCards.length===0){
                outText = statusMessages.GameResultDraw;
            }         
        }

        if(outText === null) {
            switch(this.props.gameMode){
                case gameModes.PlayerAttack || gameModes.AiDefence: {
                    outText = statusMessages.PlayerAttack;
                    break;
                }
                case gameModes.PlayerDefence || gameModes.AiAttack: {
                    outText = statusMessages.PlayerDefence;
                    break;
                }
                case gameModes.PlayerDiscard: {
                    outText = statusMessages.PlayerDiscard;
                    break;
                }
                default:{
                    outText = null;
                }
            }
        }
        
        let dash = <span>&mdash;</span>;
        return (
            <div className="col-auto">
                <h3 className="mt-2">{dash} {outText}</h3>
            </div>
        );
    }
}

export default Status;

Status.propTypes = {
    gameMode:PropTypes.string,
    computerCards: PropTypes.array,
    playerCards: PropTypes.array,
    fullDeck: PropTypes.array,
    firstStart: PropTypes.bool
};

