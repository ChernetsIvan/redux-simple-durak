import React from 'react';
import PropTypes from 'prop-types';

import InvisibleCard from './../Card/InvisibleCard';
import Card from './../Card/Card';

//Классы-контейнеры кнопок
import PlayerTakeButtonContainer from './../../../containers/GameScreen/Player/Buttons/PlayerTakeButtonContainer';
import AiTakeButtonContainer from './../../../containers/GameScreen/Player/Buttons/AiTakeButtonContainer';
import RemoveCardsButtonContainer from './../../../containers/GameScreen/Player/Buttons/RemoveCardsButtonContainer';

class Player extends React.Component{
    render(){
        let cards = this.props.cards.map((el)=>{
            return <Card id = {el.id} key={el.id} rank={el.rank} suit={el.suit}
                onCardClick={this.props.onCardClick} bootStrapColClass="col-1" hidden={false} />
        });        
         
        let output = null;
        if(this.props.cards.length > 0){
            //Показ кнопок Prev и Next
            let out_PrevButton = null;
            if(this.props.playerStartInd > 0 && this.props.cards.length > 10){
                out_PrevButton = (
                    <button onClick={this.props.onPrevClick} className="btn btn-info">
                        <b>&larr;{this.props.playerStartInd}</b>
                    </button>
                );
            }

            let out_NextButton = null;
            if(this.props.playerEndInd < this.props.cards.length-1 && this.props.cards.length > 10){
                out_NextButton = (
                    <button onClick={this.props.onNextClick} className="btn btn-info">
                        <b>{(this.props.cards.length-1) - this.props.playerEndInd}&rarr;</b>
                    </button>
                );
            }

            //Выводим максимум 10 карт: от startInd до endInd
            let outCards = [];
            if(this.props.cards.length > 10){
                outCards = cards.slice(this.props.playerStartInd, this.props.playerEndInd + 1);
            }else{
                outCards = cards;
            }
                
            output = (
                <div className="container">                        
                    <div className="row justify-content-center">
                        <div className="col-1 align-self-center">
                            {out_PrevButton}
                        </div>
                        {outCards}
                        <div className="col-1 align-self-center">
                            {out_NextButton}
                        </div>
                    </div>
                </div>
            );
        }else{
            output = <InvisibleCard />;
        }      
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        {output}
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <RemoveCardsButtonContainer />
                        <AiTakeButtonContainer />
                        <PlayerTakeButtonContainer />
                    </div> 
                </div>
            </div> 
        );
    }
}

export default Player;

Player.propTypes = {
    cards: PropTypes.array.isRequired,    
    playerStartInd: PropTypes.number.isRequired,
    playerEndInd: PropTypes.number.isRequired,
    onPrevClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onCardClick: PropTypes.func.isRequired
};