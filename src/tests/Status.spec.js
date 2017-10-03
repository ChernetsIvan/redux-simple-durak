import React from 'react';
import ReactDOM from 'react-dom';
import Status from './../components/GameScreen/Status';

const gameMode = "AiAttack";
const onGameOver = ()=>{};

test.skip('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Status gameMode={gameMode} onGameOver={onGameOver} />, div);
});