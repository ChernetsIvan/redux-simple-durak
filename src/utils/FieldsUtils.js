import DeckUtils from './DeckUtils';

import { find } from 'lodash-es';

class FieldsUtils{
    static removeCardsFromFieldsAndGiveCards(
        givePlayerFirst, aiField, playerField, fullDeck, playerCards, computerCards){

        aiField = [];
        playerField = [];
        if(givePlayerFirst){
            DeckUtils.giveUpToSixCards(fullDeck,playerCards);
            DeckUtils.giveUpToSixCards(fullDeck, computerCards);        
        }else{
            DeckUtils.giveUpToSixCards(fullDeck, computerCards);
            DeckUtils.giveUpToSixCards(fullDeck,playerCards);
        }
        DeckUtils.sortInputDeckByPower(playerCards, true);
    }

    //Игровое поле(aiField + playerField) содержит такую же по размеру карту inputCard?
    static isFieldsContainSuchCard(inputCard, aiField, playerField){
        let field = aiField.concat(playerField);
        let card = find(field, (card) => {
            return card.rank.cardValue === inputCard.rank.cardValue;
        });
        if(card === undefined){
            return false;
        }else{
            return true;
        }
    }
}

export default FieldsUtils;