import Enum from 'es6-enum'

export const GameMode = Enum(
    "PlayerAttack", 
    "PlayerDefence", 
    "PlayerDiscard",    //AI забирает: игрок подбрасывает ему карты
    "AiAttack",
    "AiDefence", 
    "AiDiscard");       //Игрок забирает: AI подбрасывает ему карты

export const cardRanks = [
    {text: "6", cardValue:1},
    {text: "7", cardValue:2},
    {text: "8", cardValue:3},
    {text: "9", cardValue:4},
    {text: "10", cardValue:5},
    {text: "В", cardValue:6},
    {text: "Д", cardValue:7},
    {text: "К", cardValue:8},
    {text: "Т", cardValue:9}
];

export const cardSuits = [
    {suit: "Ч"},
    {suit: "К"},
    {suit: "П"},
    {suit: "Б"}
];