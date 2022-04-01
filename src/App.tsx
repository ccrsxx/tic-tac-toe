import { useState, useEffect } from 'react';
import { Header, Footer } from './components';

export function App() {
  return (
    <div className='App'>
      <Header />
      <main className='game'>
        <div className='game-board'>
          <div className='game-mode'>
            <select name='mode' id='mode' className='mode'>
              <option value='normal'>Normal</option>
              <option value='human'>Play against friend</option>
            </select>
          </div>
          <div className='game-score'>
            <div className='player-card active'>
              <p className='player-name'>X</p>
              <p className='player-score'>2</p>
            </div>
            <div className='player-card'>
              <p className='player-name'>O</p>
              <p className='player-score'>_</p>
            </div>
          </div>
          <p className='game-status'>Start game or select player</p>
        </div>
        <div className='game-container'>
          <div className='square-container'>
            <div className='square-box'></div>
            <div className='square-box'></div>
            <div className='square-box'></div>
            <div className='square-box'></div>
            <div className='square-box'></div>
            <div className='square-box'></div>
            <div className='square-box'></div>
            <div className='square-box'></div>
            <div className='square-box'></div>
          </div>
        </div>
        <button className='restart-button' type='button'>
          Restart game
        </button>
      </main>
      <Footer />
    </div>
  );
}
