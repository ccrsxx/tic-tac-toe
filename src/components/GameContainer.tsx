import { GameContainerProps, SquareBoxProps } from '../types';

function SquareBox({ square, handleClick }: SquareBoxProps) {
  return (
    <div className='square-box' onClick={handleClick}>
      <span
        className={
          square === 'X'
            ? 'square active x-color'
            : square === 'O'
            ? 'square active o-color'
            : 'square'
        }
      >
        {square}
      </span>
    </div>
  );
}

export function GameContainer({
  gameBoard,
  gameWinner,
  gameOver,
  gameBoardKey,
  resetGame,
  handleClick
}: GameContainerProps) {
  const containerProps = gameWinner
    ? {
        style: { cursor: 'pointer', zIndex: 1 },
        resetGame: () => resetGame()
      }
    : {
        style: undefined,
        resetGame: undefined
      };
  return (
    <div
      style={containerProps.style}
      className='game-container'
      onClick={containerProps.resetGame}
    >
      <div
        style={{ display: gameOver ? 'block' : 'none' }}
        className='game-over'
      >
        <h2 className='game-winner'>
          {gameWinner === 'draw' ? (
            <>
              <span className='x-color'>X</span>
              <span className='o-color'>O</span>
            </>
          ) : gameWinner === 'X' ? (
            <span className='x-color'>X</span>
          ) : (
            <span className='o-color'>O</span>
          )}
        </h2>
        <h3 className='game-text'>
          {gameWinner === 'draw' ? 'DRAW!' : 'WINNER!'}
        </h3>
      </div>
      <div
        style={{ display: gameOver ? 'none' : 'grid' }}
        className='square-container'
        key={gameBoardKey}
      >
        {gameBoard.map((square, index) => (
          <SquareBox
            key={index}
            square={square}
            handleClick={handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
