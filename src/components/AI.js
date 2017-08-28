import React from 'react';
import PropTypes from 'prop-types';

import InvisibleCard from './Card/InvisibleCard';
import Card from './Card/Card';

class AI extends React.Component{
    render(){
        let output = null;
        if(this.props.cards.length > 0){
            //Не забываем, что выводим только первые 9 рубашкой кверху карт           
            
            let inputCards = [];
            inputCards = this.props.cards.concat();
            //И показываем, сколько не видно
            let countOfCardsThatNotShown = 0;
            let out_countOfCardsThatNotShown = null;
            while(inputCards.length > 9){
                inputCards.pop();
                countOfCardsThatNotShown++;
                out_countOfCardsThatNotShown = <b>+{countOfCardsThatNotShown}</b>;
            }

            let outputCards = inputCards.map((elem)=>{
                return <Card key={elem.id} bootStrapColClass="col-1 ml-3" hidden={true}/>
            }); 

            output = (
                <div className="container mt-1">
                    <div className="row justify-content-center">              
                        {outputCards}
                        <div className="col-1 align-self-center">
                            {out_countOfCardsThatNotShown}
                        </div> 
                    </div>
                </div>
            );
        }else{
            output = <InvisibleCard />;
        }
        return output;
    }
}

export default AI;

AI.propTypes = {
    cards: PropTypes.array
};