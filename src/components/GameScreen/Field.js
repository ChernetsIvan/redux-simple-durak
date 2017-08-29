import React from 'react';
import PropTypes from 'prop-types';

import InvisibleCard from './Card/InvisibleCard';
import Card from './Card/Card';

class Field extends React.Component{
    render(){
        let output = null;

        let cards = this.props.cards.map((el)=>{
            return <Card key={el.id} rank={el.rank} suit={el.suit}
                bootStrapColClass={"col-1"} hidden={false} />
        });

        //Чтобы "не скакала" разметка:
        if(this.props.cards.length === 0){
            output = <InvisibleCard />;
        }else{
            output = (
                <div className="container">
                    <div className="row">
                        {cards}
                    </div>
                </div>
            );
        }
        return output;
    }
}

export default Field;

Field.propTypes = {
    cards: PropTypes.array
};