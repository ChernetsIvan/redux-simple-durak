import DeckUtils from "./DeckUtils";

import { find } from "lodash-es";

class FieldsUtils {
  static removeCardsFromFieldsAndGiveCards(
    givePlayerFirst,
    aiField,
    playerField,
    fullDeck,
    playerCards,
    aiCards
  ) {
    while (aiField.length > 0) {
      aiField.pop();
    }
    while (playerField.length > 0) {
      playerField.pop();
    }

    if (givePlayerFirst) {
      DeckUtils.giveUpToSixCards(fullDeck, playerCards);
      DeckUtils.giveUpToSixCards(fullDeck, aiCards);
    } else {
      DeckUtils.giveUpToSixCards(fullDeck, aiCards);
      DeckUtils.giveUpToSixCards(fullDeck, playerCards);
    }
    DeckUtils.sortInputDeckByPower(playerCards, true);
  }

  //Игровое поле(aiField + playerField) содержит такую же по размеру карту inputCard?
  static isFieldsContainSuchCard(inputCard, aiField, playerField) {
    let field = aiField.concat(playerField);
    let card = find(field, card => {
      return card.rank.cardValue === inputCard.rank.cardValue;
    });
    if (card === undefined) {
      return false;
    } else {
      return true;
    }
  }
}

export default FieldsUtils;
