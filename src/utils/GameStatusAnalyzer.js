import {PlayerWin, AIWin, TheDraw, NoCardsAI} from "./../constants/GameModes";

export const analyze = (computerCards, playerCards, fullDeck) => {
  let result = "";
  if (fullDeck.length === 0) {
    if (computerCards.length === 0) {
      result = AIWin;
    }
    if (playerCards.length === 0) {
      result = PlayerWin;
    }
    if (computerCards.length === 0 && playerCards.length === 0) {
      result = TheDraw;
    }
  }
  if(computerCards.length===0){
    result =  NoCardsAI;
  }
  return result;
};
