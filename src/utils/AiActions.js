import DeckUtils from "./DeckUtils";
import FieldsUtils from "./FieldsUtils";
import * as gameModes from "./../constants/GameModes";

class AiActions {
  //AI: Сделать ход 'защиты'
  //Смотрит последнюю карту в массиве playerField
  static makeAi_Defence_Move(
    gameMode,
    playerField,
    aiCards,
    aiField,
    trumpSuit
  ) {
    if (gameMode === gameModes.AiDefence) {
      let cardToBeat = playerField[playerField.length - 1];
      DeckUtils.sortInputDeckByPower(aiCards, true);

      //Сначала пытаемся отбиться НЕ козырем
      let result = aiCards.every(function(element, index, array) {
        if (element.power > cardToBeat.power) {
          if (element.suit.suit === cardToBeat.suit.suit) {
            //сила карты больше, масть сходится ->
            //делаем ход минимально возможной по силе - картой.
            //возможно - козырной, если отбиваем тоже козырную.
            aiField.push(element);
            aiCards.splice(index, 1);
            gameMode = gameModes.PlayerAttack;
            return false;
          }
        }
        return true;
      });
      if (result === false) {
        return gameMode;
      }

      //Пытаемся отбиться козырем
      //Значит "отбиваемая" карта -> НЕ козырная
      result = aiCards.every(function(element, index, array) {
        if (element.power > cardToBeat.power) {
          if (element.suit.suit === trumpSuit.suit) {
            //ВОТ ТУТ будем модифицировать, чтобы при козыре Б не
            //не отбивал 6К ->TБ.

            //сила карты больше, масть НЕ сходится ->
            //делаем ход козырной, минимально возможной по силе - картой.
            aiField.push(element);
            aiCards.splice(index, 1);
            gameMode = gameModes.PlayerAttack;
            return false;
          }
        }
        return true;
      });
      if (result === false) {
        return gameMode;
      }

      //AI отбиться не смог. Меняем режим игры на "Игрок Подбрасывает"
      gameMode = gameModes.PlayerDiscard;
      return gameMode;
    }
  }

  //AI: Сделать ход 'атаки'
  static makeAi_Attack_Move(
    gameMode,
    aiCards,
    aiField,
    playerField,
    fullDeck,
    playerCards
  ) {
    if (gameMode === gameModes.AiAttack) {
      if (aiCards.length > 0 && playerCards.length > 0) {
        DeckUtils.sortInputDeckByPower(aiCards, true);

        //Это начало Атаки - первый ход?
        if (aiField.length === 0) {
          //Выясняем, с чего бы лучше походить.
          //Ищем одинаковые по power и rank.cardValue.
          //Для этого сначала нужно выяснить, есть ли в aiCards
          //одинаковые по rank.cardValue карты. А уже благодаря
          //сортировке по power они будут рядом
          for (let i = 0; i < aiCards.length - 1; i++) {
            let cCard = aiCards[i];
            for (let j = i + 1; j < aiCards.length; j++) {
              if (cCard.rank.cardValue === aiCards[j].rank.cardValue) {
                //Одинаковые по размеру.
                //Тогда ходим этой и выходим.
                return AiActions.aiContinueAttack(
                  i,
                  aiField,
                  aiCards,
                  gameMode
                );
              }
            }
          }
          //Одинаковых по rank.cardValue и power не нашлось, ходим самой слабой.
          return AiActions.aiContinueAttack(
            0,
            aiField,
            aiCards,
            gameMode
          );
        } else {
          //Это продолжение атаки.
          //Можем атаковать только такими по размеру,
          //какие уже есть на aiField + playerField.
          //Поочерёдно проверяем наши отсортированные карты и выбираем ту,
          //которой МОЖНО (см. далее - будет проверка->ВЫГОДНО) атаковать
          let indexCardWeMayAttack = null;
          aiCards.every(function(element, index, array) {
            if (
              FieldsUtils.isFieldsContainSuchCard(element, aiField, playerField)
            ) {
              indexCardWeMayAttack = index;
              return false;
            }
            return true;
          });

          if (indexCardWeMayAttack === null) {
            //Не найдена ни одна карта, которой МОЖНО было бы атаковать.
            return AiActions.aiStopAttack(
              gameMode,
              aiField,
              playerField,
              fullDeck,
              playerCards,
              aiCards
            );
          }
          //Найдена карта, которой МОЖНО было бы атаковать.
          //А это ВЫГОДНО?
          if (aiCards[indexCardWeMayAttack].power < 10) {
            //Эта карта - даже не козырь. Атакуем.
            return AiActions.aiContinueAttack(
              indexCardWeMayAttack,
              aiField,
              aiCards,
              gameMode
            );
          } else {
            //Козырь - а его жалко. Анализируем дальше.
            //Этот козырь - больше 10-ки?
            if (aiCards[indexCardWeMayAttack].power > 50) {
              //Это В,Д,К или Т.
              if (fullDeck.length === 0) {
                if (aiCards.length === 1) {
                  return AiActions.aiContinueAttack(
                    indexCardWeMayAttack,
                    aiField,
                    aiCards,
                    gameMode
                  );
                } else {
                  return AiActions.aiStopAttack(
                    gameMode,
                    aiField,
                    playerField,
                    fullDeck,
                    playerCards,
                    aiCards
                  );
                }
              } else {
                return AiActions.aiStopAttack(
                  gameMode,
                  aiField,
                  playerField,
                  fullDeck,
                  playerCards,
                  aiCards
                );
              }
            } else {
              //Это или 10 или ниже.
              if (fullDeck.length > 5) {
                //До конца игры далеко. Жалко козыря - отбой.
                return AiActions.aiStopAttack(
                  gameMode,
                  aiField,
                  playerField,
                  fullDeck,
                  playerCards,
                  aiCards
                );
              } else {
                //Близок конец игры. Атакуем.
                return AiActions.aiContinueAttack(
                  indexCardWeMayAttack,
                  aiField,
                  aiCards,
                  gameMode
                );
              }
            }
          }
        }
      }
    }
  }

  static aiContinueAttack(indexCardToAttack, aiField, aiCards, gameMode) {
    aiField.push(aiCards[indexCardToAttack]);
    aiCards.splice(indexCardToAttack, 1);
    gameMode = gameModes.PlayerDefence;
    return gameMode;
  }

  static aiStopAttack(
    gameMode,
    aiField,
    playerField,
    fullDeck,
    playerCards,
    aiCards
  ) {
    FieldsUtils.removeCardsFromFieldsAndGiveCards(
      false,
      aiField,
      playerField,
      fullDeck,
      playerCards,
      aiCards
    );
    gameMode = gameModes.PlayerAttack;
    return gameMode;
  }
}

export default AiActions;
