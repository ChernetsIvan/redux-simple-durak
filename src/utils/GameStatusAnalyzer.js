import {PlayerWin, AIWin, TheDraw, NoCardsAI} from "./../constants/GameModes";

export const analyze = (aiCards, playerCards, fullDeck) => {
  let result = "";
  if(aiCards.length===0){
    result =  NoCardsAI;
  }
  if (fullDeck.length === 0) {
    if (aiCards.length === 0) {
      result = AIWin;
    }
    if (playerCards.length === 0) {
      result = PlayerWin;
    }
    if (aiCards.length === 0 && playerCards.length === 0) {
      result = TheDraw;
    }
  }  
  return result;
};
