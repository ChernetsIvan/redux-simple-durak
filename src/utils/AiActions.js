import DeckUtils from './DeckUtils';
import * as gameModes from './../constants/GameModes';

class AiActions{

    //AI: Сделать ход 'защиты'
    //Смотрит последнюю карту в массиве playerField
    static makeAi_Defence_Move(gameMode, playerField, computerCards,
        aiField, trumpSuit){

        if(gameMode===gameModes.AiDefence){
            let cardToBeat = playerField[playerField.length-1];
            DeckUtils.sortInputDeckByPower(computerCards,true);
            
            //Сначала пытаемся отбиться НЕ козырем
            let result = computerCards.every(function(element,index,array){
                if(element.power > cardToBeat.power){
                    if(element.suit.suit === cardToBeat.suit.suit){
                        //сила карты больше, масть сходится -> 
                        //делаем ход минимально возможной по силе - картой.
                        //возможно - козырной, если отбиваем тоже козырную.
                        aiField.push(element);
                        computerCards.splice(index,1);
                        gameMode = gameModes.PlayerAttack;
                        return false;
                    }
                }
                return true;
            });
            if(result===false){
                return;
            }            

            //Пытаемся отбиться козырем
            //Значит "отбиваемая" карта -> НЕ козырная
            result = computerCards.every(function(element, index, array){
                if(element.power > cardToBeat.power){
                    if(element.suit.suit === trumpSuit.suit){
                        //ВОТ ТУТ будем модифицировать, чтобы при козыре Б не
                        //не отбивал 6К ->TБ.

                        //сила карты больше, масть НЕ сходится -> 
                        //делаем ход козырной, минимально возможной по силе - картой.
                        aiField.push(element);
                        computerCards.splice(index,1);
                        gameMode = gameModes.PlayerAttack;
                        return false;
                    }
                }
                return true;
            });
            if(result===false){
                return;
            }

            //AI отбиться не смог. Меняем режим игры на "Игрок Подбрасывает"
            gameMode = gameModes.PlayerDiscard;
        }
    }

    //AI: Сделать ход 'атаки'
    static makeAi_Attack_Move(gameMode, computerCards, aiField,
        isFieldContainSuchCard, fullDeck, removeCardsFromTableAndGiveCards){
        if(gameMode===gameModes.AiAttack){
            if(computerCards.length > 0){
                DeckUtils.sortInputDeckByPower(computerCards,true);
                
                //Это начало Атаки - первый ход?
                if(aiField.length === 0){
                    //Выясняем, с чего бы лучше походить.
                    //Ищем одинаковые по power и rank.cardValue.
                    //Для этого сначала нужно выяснить, есть ли в computerCards 
                    //одинаковые по rank.cardValue карты. А уже благодаря 
                    //сортировке по power они будут рядом
                    for(let i=0; i<computerCards.length-1; i++){
                        let cCard = computerCards[i];
                        for(let j=i+1; j<computerCards.length; j++){
                            if(cCard.rank.cardValue === 
                            computerCards[j].rank.cardValue){                            
                                //Одинаковые по размеру. 
                                //Тогда ходим этой и выходим.
                                AiActions.aiContinueAttack(i, aiField, computerCards, 
                                    gameMode);                            
                                return;        
                            }        
                        }
                    }
                    //Одинаковых по rank.cardValue и power не нашлось, ходим самой слабой.
                    AiActions.aiContinueAttack(0,aiField, computerCards, gameMode);                    
                }else{
                    //Это продолжение атаки.
                    //Можем атаковать только такими по размеру,
                    //какие уже есть на aiField + playerField.
                    //Поочерёдно проверяем наши отсортированные карты и выбираем ту,
                    //которой МОЖНО (см. далее - будет проверка->ВЫГОДНО) атаковать
                    let indexCardWeMayAttack = null;
                    computerCards.every(function(element, index,array){
                        if(isFieldContainSuchCard(element)){
                            indexCardWeMayAttack = index;
                            return false;
                        }
                        return true;
                    });

                    if(indexCardWeMayAttack===null){
                        //Не найдена ни одна карта, которой МОЖНО было бы атаковать.
                        AiActions.aiStopAttack(removeCardsFromTableAndGiveCards, 
                            gameMode);
                        return;
                    }
                    //Найдена карта, которой МОЖНО было бы атаковать.
                    //А это ВЫГОДНО?
                    if(computerCards[indexCardWeMayAttack].power < 10){
                        //Эта карта - даже не козырь. Атакуем.
                        AiActions.aiContinueAttack(indexCardWeMayAttack, 
                            aiField, computerCards, gameMode);
                    }else{
                        //Козырь - а его жалко. Анализируем дальше.
                        //Этот козырь - больше 10-ки?
                        if(computerCards[indexCardWeMayAttack].power > 50){
                            //Это В,Д,К или Т.
                            if(fullDeck.length === 0){
                                if(computerCards.length === 1){
                                    AiActions.aiContinueAttack(indexCardWeMayAttack, aiField,
                                        computerCards, gameMode);
                                }else{
                                    AiActions.aiStopAttack(removeCardsFromTableAndGiveCards, 
                                        gameMode);
                                }
                            }else{
                                AiActions.aiStopAttack(removeCardsFromTableAndGiveCards, 
                                    gameMode);
                            }
                        }else{
                            //Это или 10 или ниже.
                            if(fullDeck.length > 5){
                                //До конца игры далеко. Жалко козыря - отбой.
                                AiActions.aiStopAttack(removeCardsFromTableAndGiveCards, 
                                    gameMode);
                            }else{
                                //Близок конец игры. Атакуем.
                                AiActions.aiContinueAttack(indexCardWeMayAttack, aiField,
                                    computerCards, gameMode);
                            }
                        } 
                    }
                }            
            }        
        }
    }

    static aiContinueAttack(indexCardToAttack, aiField, computerCards, 
        gameMode){

        aiField.push(computerCards[indexCardToAttack]);
        computerCards.splice(indexCardToAttack,1);
        gameMode = gameModes.PlayerDefence;
    }

    static aiStopAttack(removeCardsFromTableAndGiveCards, gameMode){
        removeCardsFromTableAndGiveCards(false);
        gameMode = gameModes.PlayerAttack;
    }
}

export default AiActions;