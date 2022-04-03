interface GameBoardProps {
  playerScore: number;
  computerScore: number;
  gameBoard: string[];
  gameMode: string;
  gameWinner: string;
  nextPlayer: string;
  handleMode: ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function GameBoard({
  playerScore,
  computerScore,
  gameBoard,
  gameMode,
  gameWinner,
  nextPlayer,
  handleMode
}: GameBoardProps) {
  return (
    <div className='game-board'>
      <div className='game-mode'>
        <select
          name='mode'
          id='mode'
          className='mode'
          value={gameMode}
          onChange={handleMode}
        >
          <option value='normal'>Normal</option>
          <option value='friend'>Play against friend</option>
        </select>
      </div>
      <div className='game-score'>
        <div
          className={nextPlayer === 'X' ? 'player-card active' : 'player-card'}
        >
          <p className='player-name'>X</p>
          <p className='player-score'>{!playerScore ? '_' : playerScore}</p>
        </div>
        <div
          className={nextPlayer === 'O' ? 'player-card active' : 'player-card'}
        >
          <p className='player-name'>O</p>
          <p className='player-score'>{!computerScore ? '_' : computerScore}</p>
        </div>
      </div>
      <p className='game-status active' key={Date.now()}>
        {gameBoard.every((square) => !square) ? (
          'Start game or select player'
        ) : gameWinner ? (
          'Game over'
        ) : nextPlayer === 'X' ? (
          <>
            <span className='name'>X</span> Turn
          </>
        ) : (
          <>
            <span className='name'>O</span> Turn
          </>
        )}
      </p>
    </div>
  );
}
