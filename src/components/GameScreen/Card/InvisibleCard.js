import React from 'react';

import Card from './Card';

import { uniqueId } from 'lodash-es';

//Применяется AI.js, Player.js и Field.js - когда во входном массиве нет карт:
//чтобы "не скакала" разметка. 
class InvisibleCard extends React.Component{
    render(){
        let randKey = uniqueId();
        return(
            <div className="container invisible">
                <div className="row">                            
                    <Card 
                        key={randKey} 
                        bootStrapColClass="col-1"
                        hidden={true}
                        />;
                </div>
            </div>
        );
    }
}

export default InvisibleCard;