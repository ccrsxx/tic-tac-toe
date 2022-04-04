interface GameBoardProps {
  playerScore: number;
  computerScore: number;
  computerPlayer: string;
  gameBoard: string[];
  gameMode: string;
  gameWinner: string;
  nextPlayer: string;
  gameStatusKey: number;
  gameBoardKey: number;
  handleMode: ({
    target: { value }
  }: React.ChangeEvent<HTMLSelectElement>) => void;
  handlePlayer: (player: string) => void;
}

export function GameBoard({
  playerScore,
  computerScore,
  computerPlayer,
  gameBoard,
  gameMode,
  gameWinner,
  nextPlayer,
  gameStatusKey,
  gameBoardKey,
  handleMode,
  handlePlayer
}: GameBoardProps) {
  const cardProps =
    gameMode !== 'friend'
      ? {
          style: { cursor: 'pointer' },
          handlePlayerX: () => handlePlayer('X'),
          handlePlayerO: () => handlePlayer('O')
        }
      : {
          style: { cursor: 'default' },
          handlePlayerX: undefined,
          handlePlayerO: undefined
        };
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
          <option value='impossible'>Impossible</option>
          <option value='friend'>Play against friend</option>
        </select>
      </div>
      <div className='game-score'>
        <div
          style={cardProps.style}
          className={nextPlayer === 'X' ? 'player-card active' : 'player-card'}
          key={gameBoardKey}
          onClick={cardProps.handlePlayerX}
        >
          <p className='player-name'>X</p>
          <p className='player-score'>{!playerScore ? '_' : playerScore}</p>
        </div>
        <div
          style={cardProps.style}
          className={nextPlayer === 'O' ? 'player-card active' : 'player-card'}
          key={gameBoardKey + 1}
          onClick={cardProps.handlePlayerO}
        >
          <p className='player-name'>O</p>
          <p className='player-score'>{!computerScore ? '_' : computerScore}</p>
        </div>
      </div>
      <p className='game-status' key={gameStatusKey}>
        {gameBoard.every((square) => !square) &&
        gameMode !== 'friend' &&
        computerPlayer !== 'X' ? (
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
