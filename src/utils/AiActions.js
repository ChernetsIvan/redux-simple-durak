import DeckUtils from "./DeckUtils";
import FieldsUtils from "./FieldsUtils";
import * as gameModes from "./../constants/GameModes";

class AiActions {
  // AI: Сделать ход 'защиты'
  // Смотрит последнюю карту в массиве playerField
  static makeAiDefenceMove(gameMode, playerField, aiCards, aiField, trumpSuit) {
    if (gameMode === gameModes.AiDefence) {
      const cardToBeat = playerField[playerField.length - 1];
      DeckUtils.sortInputDeckByPower(aiCards, true);

      // Сначала пытаемся отбиться НЕ козырем
      let result = aiCards.every((element, index) => {
        if (element.power > cardToBeat.power) {
          if (element.suit.suit === cardToBeat.suit.suit) {
            // сила карты больше, масть сходится ->
            // делаем ход минимально возможной по силе - картой.
            // возможно - козырной, если отбиваем тоже козырную.
            aiField.push(element);
            aiCards.splice(index, 1);
            return false;
          }
        }
        return true;
      });
      if (result === false) {
        return gameModes.PlayerAttack;
      }

      // Пытаемся отбиться козырем
      // Значит "отбиваемая" карта -> НЕ козырная
      result = aiCards.every((element, index) => {
        if (element.power > cardToBeat.power) {
          if (element.suit.suit === trumpSuit.suit) {
            // ВОТ ТУТ будем модифицировать, чтобы при козыре Б не
            // не отбивал 6К ->TБ.

            // сила карты больше, масть НЕ сходится ->
            // делаем ход козырной, минимально возможной по силе - картой.
            aiField.push(element);
            aiCards.splice(index, 1);
            return false;
          }
        }
        return true;
      });
      if (result === false) {
        return gameModes.PlayerAttack;
      }

      // AI отбиться не смог. Меняем режим игры на "Игрок Подбрасывает"
      return gameModes.PlayerDiscard;
    }
    return "";
  }

  // AI: Сделать ход 'атаки'
  static makeAiAttackMove(
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

        // Это начало Атаки - первый ход?
        if (aiField.length === 0) {
          // Выясняем, с чего бы лучше походить.
          // Ищем одинаковые по power и rank.cardValue.
          // Для этого сначала нужно выяснить, есть ли в aiCards
          // одинаковые по rank.cardValue карты. А уже благодаря
          // сортировке по power они будут рядом
          for (let i = 0; i < aiCards.length - 1; i += 1) {
            const cCard = aiCards[i];
            for (let j = i + 1; j < aiCards.length; j += 1) {
              if (cCard.rank.cardValue === aiCards[j].rank.cardValue) {
                // Одинаковые по размеру.
                // Тогда ходим этой и выходим.
                return AiActions.aiContinueAttack(i, aiField, aiCards);
              }
            }
          }
          // Одинаковых по rank.cardValue и power не нашлось, ходим самой слабой.
          return AiActions.aiContinueAttack(0, aiField, aiCards, gameMode);
        }

        // Это продолжение атаки.
        // Можем атаковать только такими по размеру, какие уже есть на aiField + playerField.
        // Поочерёдно проверяем наши отсортированные карты и выбираем ту,
        // которой МОЖНО (см. далее - будет проверка->ВЫГОДНО) атаковать
        let indexCardWeMayAttack = null;
        aiCards.every((element, index) => {
          if (
            FieldsUtils.isFieldsContainSuchCard(element, aiField, playerField)
          ) {
            indexCardWeMayAttack = index;
            return false;
          }
          return true;
        });

        if (indexCardWeMayAttack === null) {
          // Не найдена ни одна карта, которой МОЖНО было бы атаковать.
          return AiActions.aiStopAttack(
            gameMode,
            aiField,
            playerField,
            fullDeck,
            playerCards,
            aiCards
          );
        }
        // Найдена карта, которой МОЖНО было бы атаковать.
        // А это ВЫГОДНО?
        if (aiCards[indexCardWeMayAttack].power < 10) {
          // Эта карта - даже не козырь. Атакуем.
          return AiActions.aiContinueAttack(
            indexCardWeMayAttack,
            aiField,
            aiCards
          );
        }
        // Козырь - а его жалко. Анализируем дальше.
        // Этот козырь - больше 10-ки?
        if (aiCards[indexCardWeMayAttack].power > 50) {
          // Это В,Д,К или Т.
          if (fullDeck.length === 0) {
            if (aiCards.length === 1) {
              return AiActions.aiContinueAttack(
                indexCardWeMayAttack,
                aiField,
                aiCards,
                gameMode
              );
            }
            return AiActions.aiStopAttack(
              gameMode,
              aiField,
              playerField,
              fullDeck,
              playerCards,
              aiCards
            );
          }
          return AiActions.aiStopAttack(
            gameMode,
            aiField,
            playerField,
            fullDeck,
            playerCards,
            aiCards
          );
        }
        // Это или 10 или ниже.
        if (fullDeck.length > 5) {
          // До конца игры далеко. Жалко козыря - отбой.
          return AiActions.aiStopAttack(
            gameMode,
            aiField,
            playerField,
            fullDeck,
            playerCards,
            aiCards
          );
        }
        // Близок конец игры. Атакуем.
        return AiActions.aiContinueAttack(
          indexCardWeMayAttack,
          aiField,
          aiCards
        );
      }
    }
    return "";
  }

  static aiContinueAttack(indexCardToAttack, aiField, aiCards) {
    aiField.push(aiCards[indexCardToAttack]);
    aiCards.splice(indexCardToAttack, 1);
    return gameModes.PlayerDefence;
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
    return gameModes.PlayerAttack;
  }
}

export default AiActions;
