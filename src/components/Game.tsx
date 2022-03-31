export function Game() {
  return (
    <main className='game'>
      <div className='game-mode'>
        <select name='mode' id='mode'>
          <option value='normal'>Normal</option>
          <option value='human'>Play against friend</option>
        </select>
      </div>
    </main>
  );
}
