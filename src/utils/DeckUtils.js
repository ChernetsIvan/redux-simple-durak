import { cardRanks, cardSuits } from "./../constants/GameConstants";

import CardModel from "./../models/CardModel";

class DeckUtils {
  // отсортировать входной массив карт по возрастанию isAsc=true
  // (убыванию-> isAsc=false)  по параметру 'power'
  static sortInputDeckByPower(inputDeck, isAsc) {
    inputDeck.sort((a, b) => {
      if (isAsc) {
        return a.power - b.power;
      }
      return b.power - a.power;
    });
  }

  // Возвращает наполненную всеми 36-ю картами колоду
  static fillCards(trumpSuit) {
    const fullDeck = [];
    // Устанавливает power для каждой карты по принципу:
    // козырь->10*rank.cardValue, НЕкозырь->1*rank.cardValue
    let z = 0;
    let power;
    let coef;
    cardSuits.forEach((element) => {
      if (element.suit === trumpSuit.suit) {
        coef = 10;
      } else {
        coef = 1;
      }
      cardRanks.forEach((element2) => {
        power = coef * element2.cardValue;
        fullDeck.push(new CardModel(z, element2, element, power));
        z+=1;
      });
    });
    return fullDeck;
  }

  // Возвращает перемешанную колоду
  static shuffle(inputDeck) {
    const newFullDeck = [];
    while (inputDeck.length > 0) {
      // Случайный индекс в inputDeck
      let randIndex = Math.random() * (inputDeck.length - 1);
      randIndex = Math.round(randIndex);

      const card = inputDeck[randIndex];
      newFullDeck.push(card);

      inputDeck.splice(randIndex, 1);
    }
    return newFullDeck;
  }

  // Перемещает первую попавшуюся карту с козырной мастью
  // в конец колоды
  static moveAnyCardWithTrumpSuitToTailOfFullDeck(trumpSuit, fullDeck) {
    const card = fullDeck.find(fCard => fCard.suit.suit === trumpSuit.suit);
    const index = fullDeck.indexOf(card);
    fullDeck.splice(index, 1);
    fullDeck.push(card);
  }

  // взять из НАЧАЛА (!) колоды fullDeck и положить в inputDeck столько карт,
  // чтобы в inputDeck в итоге было 6 карт
  static giveUpToSixCards(fullDeck, inputDeck) {
    // если хотя бы одно из условий не выполняется, в цикл не заходим:
    while (inputDeck.length < 6 && fullDeck.length > 0) {
      const card = fullDeck.shift();
      inputDeck.push(card);
    }
  }

  // Возвращает козырную масть (не карту!) для будущей игры
  static chooseSuitForTrumpCardInFuture() {
    let randIndex = Math.random() * (cardSuits.length - 1);
    randIndex = Math.round(randIndex);
    return cardSuits[randIndex];
  }
}

export default DeckUtils;
