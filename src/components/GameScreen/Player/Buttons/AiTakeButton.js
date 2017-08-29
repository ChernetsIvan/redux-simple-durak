import React from 'react';
import PropTypes from 'prop-types';

class AiTakeButton extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.onClickHandler();
    }

    render(){        
        let dash = <span>&mdash;</span>;
        let button = null;
        if(this.props.mode.mode === this.props.GameMode.PlayerDiscard){
            button = (
                <button
                className="btn btn-success" 
                onClick={this.onClick}>
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
    mode: PropTypes.array,
    GameMode:PropTypes.any,
    onClickHandler: PropTypes.any
};