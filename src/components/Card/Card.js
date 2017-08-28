import React from 'react';
import PropTypes from 'prop-types';

import clubSuit from './../../assets/card-suits/club.png';
import diamondSuit from './../../assets/card-suits/diamond.png';
import heartSuit from './../../assets/card-suits/heart.png';
import spadeSuit from './../../assets/card-suits/spade.png';

class Card extends React.Component{
    constructor(props){
        super(props);
        
        this.handleClickOnCard = this.handleClickOnCard.bind(this);
    }

    handleClickOnCard(e){
        this.props.onCardClick(this.props.id);
    }

    render(){  
        let classAttr = this.props.bootStrapColClass + " card mb-1"; 

        let output = null;
        if(this.props.hidden === true){
            //Отрисовываем карту рубашкой кверху

            classAttr = classAttr + " shirt";

            output = (
                <div key={this.props.key}
                    className={classAttr}>
                </div>
            );
        }else{
            //Показываем карту Игроку

            let suit = this.props.suit.suit.toString();
            let rank = this.props.rank.text.toString();

            let suitImg;
            let sizeText;
            switch(suit){
                case "Ч":{
                    suitImg = heartSuit;
                    sizeText = <b className="redText">{rank}</b>
                    break;
                }
                case "К":{
                    suitImg = clubSuit;
                    sizeText = <b className="blackText">{rank}</b>
                    break;
                }
                case "П":{
                    suitImg = spadeSuit;
                    sizeText = <b className="blackText">{rank}</b>
                    break;
                }
                case "Б":{
                    suitImg = diamondSuit;
                    sizeText = <b className="redText">{rank}</b>
                    break;
                }
                default: suitImg = null;
            }

            output = (
                <div key={this.props.key}
                    onClick={this.handleClickOnCard}
                    className={classAttr}>
                    
                    <div className="row">
                        <b className="ml-1">{sizeText}</b>                
                    </div>
                    <div className="row">                    
                        <img className="littleSuitImg ml-1" src={suitImg} alt=""/>                                    
                    </div>
                    <div className="row justify-content-center">
                        <img className="bigSuitImg my-2" src={suitImg} alt=""/>                  
                    </div>                
                    <div className="row justify-content-end">
                        <img className="littleSuitImg rotated mr-1" src={suitImg} alt=""/>                
                    </div>
                    <div className="row justify-content-end">
                        <b className="rotated mr-1">{sizeText}</b>                
                    </div>                
                </div>
            );
        }

        return output;
    }
}

export default Card;

Card.propTypes = {
    id: PropTypes.number,
    key: PropTypes.number,
    rank: PropTypes.shape({
        text: PropTypes.text,
        cardValue: PropTypes.number
    }),
    suit: PropTypes.shape({
        suit: PropTypes.string
    }),
    onCardClick: PropTypes.func,
    bootStrapColClass: PropTypes.string,
    hidden: PropTypes.bool
};