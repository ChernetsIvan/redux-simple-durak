import { pull, find } from 'lodash-es';

class DeckUtils{
    //отсортировать входной массив карт по возрастанию isAsc=true
    //(убыванию-> isAsc=false)  по параметру 'power'
    static sortInputDeckByPower(inputDeck, isAsc){
        inputDeck.sort(function(a,b){
            if(isAsc){
                return a.power - b.power;
            }else{
                return b.power - a.power;
            }        
        });
    }

    //Возвращает перемешанную колоду
    static shuffle(inputDeck){
        var newFullDeck = [];
        while(inputDeck.length > 0){
            //Случайный индекс в inputDeck
            let randIndex = Math.random() * (inputDeck.length-1);
            randIndex = Math.round(randIndex);

            let card = inputDeck[randIndex];
            newFullDeck.push(card);

            inputDeck.splice(randIndex, 1);
        }
        return newFullDeck;
    }

    //Перемещает первую попавшуюся карту с козырной мастью
    //в конец колоды 
    static moveAnyCardWithTrumpSuitToTailOfFullDeck(trumpSuit, fullDeck){
        let card = find(fullDeck, (card) => {
            return card.suit.suit === trumpSuit.suit;
        });
        pull(fullDeck, card);
        fullDeck.push(card);
    }

    //взять из НАЧАЛА (!) колоды fullDeck и положить в inputDeck столько карт, 
    //чтобы в inputDeck в итоге было 6 карт
    static giveUpToSixCards(fullDeck, inputDeck){
        //если хотя бы одно из условий не выполняется, в цикл не заходим:
        while(inputDeck.length < 6 && fullDeck.length > 0){
            let card = fullDeck.shift();
            inputDeck.push(card);
        }
    }

    //Возвращает козырную масть (не карту!) для будущей игры
    static chooseSuitForTrumpCardInFuture(cardSuits){
        let randIndex = Math.random() * (cardSuits.length-1);
        randIndex = Math.round(randIndex);
        return cardSuits[randIndex];
    }
}

export default DeckUtils;