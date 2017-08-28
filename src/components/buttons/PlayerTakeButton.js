import React  from 'react';
import PropTypes from 'prop-types';

class PlayerTakeButton extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.onClickHandler();
    }

    render(){        
        let button = null;
        if(this.props.mode.mode === this.props.GameMode.PlayerDefence || 
            this.props.mode.mode === this.props.GameMode.AiDiscard){
            
            let dash = <span>&mdash;</span>;
            if(this.props.playerCards.length > 0 ){
                button = (
                    <button className="btn btn-danger" onClick={this.onClick}>
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
    mode: PropTypes.array,
    GameMode:PropTypes.any,
    onClickHandler: PropTypes.any,
    playerCards: PropTypes.array
};