import React from 'react';
import PropTypes from 'prop-types';

class RemoveCardsFromTableButton extends React.Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.onClickHandler();
    }

    render(){        
        let button = null;
        if(this.props.aiField.length === this.props.playerField.length &&
            this.props.aiField.length !== 0 &&
            this.props.playerField.length !== 0){

            let dash = <span>&mdash;</span>;
            button = (
                <button className="btn btn-info" onClick={this.onClick}>
                    {dash} Отбой!
                </button> 
            );
        }else{
            button = null;
        }        
        return button;
    }
}

export default RemoveCardsFromTableButton;

RemoveCardsFromTableButton.propTypes = {
    aiField: PropTypes.array,
    playerField: PropTypes.array,
    onClickHandler: PropTypes.any
};