import {PlayerWin, AIWin, TheDraw, NoCardsAI} from "./../constants/GameModes";

export const analyze = (computerCards, playerCards, fullDeck) => {
  if (fullDeck.length === 0) {
    if (computerCards.length === 0) {
      return AIWin;
    }
    if (playerCards.length === 0) {
      return PlayerWin;
    }
    if (computerCards.length === 0 && playerCards.length === 0) {
      return TheDraw;
    }
  }
  if(computerCards.length===0){
    return NoCardsAI;
  }
  return "";
};
