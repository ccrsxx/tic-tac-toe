export function Game() {
  return (
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
      </div>
    </main>
  );
}
