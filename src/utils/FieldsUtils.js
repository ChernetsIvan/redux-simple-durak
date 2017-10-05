import { find } from "lodash-es";

import DeckUtils from "./DeckUtils";

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

  // Игровое поле(aiField + playerField) содержит такую же по размеру карту inputCard?
  static isFieldsContainSuchCard(inputCard, aiField, playerField) {
    const field = aiField.concat(playerField);
    const card = field.find(fCard => fCard.rank.cardValue === inputCard.rank.cardValue);
    if (card === undefined) {
      return false;
    }
    return true;    
  }
}

export default FieldsUtils;
