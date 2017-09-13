import DeckUtils from "./DeckUtils";
import FieldsUtils from "./FieldsUtils";
import AiActions from "./AiActions";
import * as gameModes from "./../constants/GameModes";

class PlayerActionsHandler {
  //Вся обработка кликов Игрока по картам Игрока
  static handleClickOnCard(
    cardID,
    playerCards,
    gameMode,
    playerField,
    aiField,
    trumpSuit,
    fullDeck,
    computerCards
  ) {
    //У Игрока есть карты?
    if (playerCards.length > 0) {
      playerCards.every(function(element, index, array) {
        //Это та карта, что выбрал Игрок?
        if (element.id === cardID) {
          if (gameMode === gameModes.PlayerAttack) {
            //Это первая карта на playerField? Если нет - ход допустим?
            if (
              playerField.length === 0 ||
              FieldsUtils.isFieldsContainSuchCard(
                element,
                aiField,
                playerField
              ) === true
            ) {
              playerField.push(element);
              playerCards.splice(index, 1);
              gameMode = gameModes.AiDefence;
              //заставляем AI сделать ход защиты
              gameMode = AiActions.makeAi_Defence_Move(
                gameMode,
                playerField,
                computerCards,
                aiField,
                trumpSuit
              );
            }
            return false;
          }

          if (gameMode === gameModes.PlayerDiscard) {
            //Такая карта допустима?
            if (
              FieldsUtils.isFieldsContainSuchCard(
                element,
                aiField,
                playerField
              ) === true
            ) {
              playerField.push(element);
              playerCards.splice(index, 1);
            }
            return false;
          }

          if (gameMode === gameModes.PlayerDefence) {
            if (element.power > aiField[aiField.length - 1].power) {
              //Карта больше по силе. Масть правильная? Или если козырь, то ОК.
              if (
                element.suit.suit === aiField[aiField.length - 1].suit.suit ||
                element.suit.suit === trumpSuit.suit
              ) {
                playerField.push(element);
                playerCards.splice(index, 1);
                gameMode = gameModes.AiAttack;
                //заставляем AI сделать ход атаки
                gameMode = AiActions.makeAi_Attack_Move(
                  gameMode,
                  computerCards,
                  aiField,
                  playerField,
                  fullDeck,
                  playerCards
                );
              }
            }
            return false;
          }
        }
        return true;
      });
      return gameMode;
    }
  }

  //Обработка нажатия на кнопку "Беру!"
  static handleClickOnTakeButton(
    playerField,
    playerCards,
    aiField,
    fullDeck,
    computerCards,
    gameMode
  ) {
    //TODO - тут написать обработку сброса карт для AI

    //Игрок забирает все карты: и с playerField, и с aiField
    while (playerField.length > 0) {
      playerCards.push(playerField.pop());
    }
    while (aiField.length > 0) {
      playerCards.push(aiField.pop());
    }
    DeckUtils.sortInputDeckByPower(playerCards, true);

    //AI набирает из fullDeck
    DeckUtils.giveUpToSixCards(fullDeck, computerCards);

    gameMode = gameModes.AiAttack;
    gameMode = AiActions.makeAi_Attack_Move(
      gameMode,
      computerCards,
      aiField,
      playerField,
      fullDeck,
      playerCards
    );
    return gameMode;
  }

  //Обработка нажатия на кнопку "Подбросить нечего, забирай!"
  static handleClickOnAiTakeButton(
    playerField,
    computerCards,
    aiField,
    fullDeck,
    playerCards,
    gameMode
  ) {
    //Позволяем AI Забрать все карты: и с playerField, и с aiField
    while (playerField.length > 0) {
      computerCards.push(playerField.pop());
    }
    while (aiField.length > 0) {
      computerCards.push(aiField.pop());
    }

    //Player набирает из fullDeck
    DeckUtils.giveUpToSixCards(fullDeck, playerCards);
    DeckUtils.sortInputDeckByPower(playerCards, true);

    gameMode = gameModes.PlayerAttack;
    return gameMode;
  }
}

export default PlayerActionsHandler;
