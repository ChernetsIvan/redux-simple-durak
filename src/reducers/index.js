import {combineReducers} from 'redux';

import startGame from './startGame';
import pagination from './pagination';
import playControl from './playControl';

export default combineReducers({
    startGame,
    pagination,
    playControl
});