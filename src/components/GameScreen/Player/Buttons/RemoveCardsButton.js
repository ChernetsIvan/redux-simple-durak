import React from 'react';
import PropTypes from 'prop-types';

class RemoveCardsButton extends React.Component{
    render(){        
        let button = null;
        if(this.props.aiField.length === this.props.playerField.length &&
            this.props.aiField.length !== 0 &&
            this.props.playerField.length !== 0){

            let dash = <span>&mdash;</span>;
            button = (
                <button className="btn btn-info" onClick={this.props.onRemoveCardsClick}>
                    {dash} Отбой!
                </button> 
            );
        }else{
            button = null;
        }        
        return button;
    }
}

export default RemoveCardsButton;

RemoveCardsButton.propTypes = {
    aiField: PropTypes.array.isRequired,
    playerField: PropTypes.array.isRequired,
    onRemoveCardsClick: PropTypes.func.isRequired
};